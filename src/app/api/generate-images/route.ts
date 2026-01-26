import { NextRequest, NextResponse } from 'next/server';

// Service-specific gradients and patterns
const serviceStyles: Record<string, { gradient: string, pattern: string }> = {
  'cloud-services': {
    gradient: 'linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)',
    pattern: 'bg-gradient-to-br from-blue-100 to-blue-200'
  },
  'microsoft-365': {
    gradient: 'linear-gradient(135deg, #FF6B35 0%, #4285F4 100%)',
    pattern: 'bg-gradient-to-br from-orange-100 to-orange-200'
  },
  'web-development': {
    gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
    pattern: 'bg-gradient-to-br from-green-100 to-green-200'
  },
  'devops-automation': {
    gradient: 'linear-gradient(135deg, #0D9488 0%, #F59E0B 100%)',
    pattern: 'bg-gradient-to-br from-teal-100 to-teal-200'
  },
  'network-solutions': {
    gradient: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
    pattern: 'bg-gradient-to-br from-indigo-100 to-indigo-200'
  },
  'cyber-security': {
    gradient: 'linear-gradient(135deg, #DC2626 0%, #EF4444 100%)',
    pattern: 'bg-gradient-to-br from-red-100 to-red-200'
  },
  'it-support': {
    gradient: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
    pattern: 'bg-gradient-to-br from-cyan-100 to-cyan-200'
  },
  'ip-telephony': {
    gradient: 'linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%)',
    pattern: 'bg-gradient-to-br from-blue-100 to-blue-200'
  },
  'it-consulting': {
    gradient: 'linear-gradient(135deg, #9333EA 0%, #6366F1 100%)',
    pattern: 'bg-gradient-to-br from-purple-100 to-purple-200'
  },
  'backup-disaster-recovery': {
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #10B981 100%)',
    pattern: 'bg-gradient-to-br from-yellow-100 to-yellow-200'
  },
  'endpoint-management': {
    gradient: 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)',
    pattern: 'bg-gradient-to-br from-emerald-100 to-emerald-200'
  },
  'virtualization': {
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #10B981 100%)',
    pattern: 'bg-gradient-to-br from-blue-100 to-blue-200'
  },
  'cctv': {
    gradient: 'linear-gradient(135deg, #4B5563 0%, #DC2626 100%)',
    pattern: 'bg-gradient-to-br from-green-100 to-green-200'
  },
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');

  // Return style information for services/blog
  if (type === 'styles') {
    const results: any[] = [];

    for (const [slug, styles] of Object.entries(serviceStyles)) {
      results.push({ slug, ...styles });
    }

    return NextResponse.json({ results });
  }

  return NextResponse.json({ error: 'Invalid type parameter' }, { status: 400 });
}
