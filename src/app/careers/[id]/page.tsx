'use client';

import { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, MapPin, Clock, CheckCircle2, Upload, X } from 'lucide-react';
import { jobs, getJobById } from '@/lib/data/jobs';
import { notFound } from 'next/navigation';
import { toast } from 'sonner';

export default function JobApplication({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    coverLetter: '',
    resume: null as File | null,
  });
  const job = getJobById(id);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 0);
  }, [id]);

  if (!job) {
    notFound();
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('jobId', job.id);
      formDataToSend.append('jobTitle', job.title);
      formDataToSend.append('firstName', formData.firstName);
      formDataToSend.append('lastName', formData.lastName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('address', formData.address);
      formDataToSend.append('coverLetter', formData.coverLetter);
      if (formData.resume) {
        formDataToSend.append('resume', formData.resume);
      }

      const response = await fetch(`/api/job-application`, {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        toast.success('Application submitted successfully! We will contact you soon.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
          coverLetter: '',
          resume: null,
        });
      } else {
        toast.error('Failed to submit application. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        resume: e.target.files[0],
      });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/careers-hero.png"
            alt="Job Application"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Careers
          </Link>
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {job.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-white/90">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{job.type}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Job Details */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-border sticky top-24">
                <h2 className="text-2xl font-bold mb-6">Job Details</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-3 text-[oklch(0.35_0.12_260)]">About the Role</h3>
                    <p className="text-muted-foreground">{job.description}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3 text-[oklch(0.35_0.12_260)]">Responsibilities</h3>
                    <ul className="space-y-2">
                      {job.responsibilities.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-[oklch(0.5_0.2_25)] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3 text-[oklch(0.35_0.12_260)]">Requirements</h3>
                    <ul className="space-y-2">
                      {job.requirements.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-[oklch(0.5_0.2_25)] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3 text-[oklch(0.35_0.12_260)]">Benefits</h3>
                    <ul className="space-y-2">
                      {job.benefits.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-[oklch(0.35_0.12_260)] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-border">
                <h2 className="text-3xl font-bold mb-6">Apply for this Position</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below to apply. We'll review your application and get back to you shortly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-[oklch(0.35_0.12_260)]"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-[oklch(0.35_0.12_260)]"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-[oklch(0.35_0.12_260)]"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-[oklch(0.35_0.12_260)]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-semibold mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-[oklch(0.35_0.12_260)]"
                    />
                  </div>

                  <div>
                    <label htmlFor="coverLetter" className="block text-sm font-semibold mb-2">
                      Cover Letter
                    </label>
                    <textarea
                      id="coverLetter"
                      name="coverLetter"
                      rows={6}
                      value={formData.coverLetter}
                      onChange={handleChange}
                      placeholder="Tell us why you're interested in this position..."
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-[oklch(0.35_0.12_260)] resize-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="resume" className="block text-sm font-semibold mb-2">
                      Resume (PDF, DOC, DOCX) *
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        required
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      <label
                        htmlFor="resume"
                        className="flex items-center justify-center w-full px-4 py-8 border-2 border-dashed border-border rounded-xl cursor-pointer hover:border-[oklch(0.35_0.12_260)] transition-colors"
                      >
                        <div className="text-center">
                          <Upload className="w-12 h-12 text-[oklch(0.35_0.12_260)] mx-auto mb-3" />
                          {formData.resume ? (
                            <div>
                              <p className="font-semibold">{formData.resume.name}</p>
                              <p className="text-sm text-muted-foreground">
                                {(formData.resume.size / 1024).toFixed(2)} KB
                              </p>
                            </div>
                          ) : (
                            <div>
                              <p className="font-semibold">Choose a file</p>
                              <p className="text-sm text-muted-foreground">
                                or drag and drop here
                              </p>
                            </div>
                          )}
                        </div>
                      </label>
                      {formData.resume && (
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, resume: null })}
                          className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-[oklch(0.5_0.2_25)] via-[oklch(0.35_0.12_260)] to-[oklch(0.5_0.2_25)] text-white font-bold rounded-full hover:shadow-2xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy. Your application will be sent to career@gurujitechglobal.com
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
