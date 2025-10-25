import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  MessageCircle, 
  Calendar, 
  BarChart3, 
  Users, 
  BookOpen, 
  Settings, 
  Plus, 
  Search, 
  Filter, 
  TrendingUp, 
  TrendingDown, 
  Share2, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Upload, 
  Download, 
  Edit, 
  Trash2, 
  Eye, 
  Menu,
  X,
  ChevronRight,
  Star,
  Send,
  Bell,
  Home,
  User,
  HelpCircle,
  Shield,
  Smile,
  Meh,
  Frown,
  Activity,
  Target,
  Award,
  FileText,
  Video,
  Headphones,
  Coffee,
  Moon,
  Sun,
  Flag,
  MoreHorizontal,
  LogOut,
  LogIn,
  Bot,
  PhoneCall,
  PenTool,
  UserCheck,
  GraduationCap,
  Lock,
  Unlock,
  UserPlus,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Database,
  Zap,
  Globe,
  Smartphone,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  ArrowRight,
  Play,
  Quote,
  Sparkles,
  Waves,
  Leaf,
  Rainbow
} from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { Badge } from './components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { Switch } from './components/ui/switch';
import { Progress } from './components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './components/ui/dialog';
import { Label } from './components/ui/label';
import { Separator } from './components/ui/separator';
import { ScrollArea } from './components/ui/scroll-area';

// Import authentication component
import { AuthModal } from './pages/signin_up';

// Import student dashboard components
import {
  StudentNavigation,
  StudentDashboard,
  PeerForum,
  ResourcesHub,
  MyJourney,
  StudentJournal,
  AIChat,
  SOSPage,
  CounselorBooking
} from './pages/sdash';

// Import counsellor dashboard components
import {
  CounsellorNavigation,
  CounsellorDashboard,
  CounsellorSchedule,
  CounsellorCaseload,
  CounsellorResources
} from './pages/cdash';

// Import volunteer dashboard components
import {
  VolunteerNavigation,
  VolunteerChat,
  VolunteerShifts,
  VolunteerForum
} from './pages/vdash';

// Import admin dashboard components
import {
  AdminNavigation,
  AdminAnalytics,
  AdminStudents,
  AdminCounsellors,
  AdminVolunteers,
  AdminModeration,
  AdminSystem
} from './pages/adash';

// Mock data
const mockPosts = [
  {
    id: 1,
    author: 'QuietRiver',
    circle: 'c/ExamStress',
    title: 'Feeling overwhelmed with upcoming finals',
    content: 'Anyone else struggling with the pressure? Looking for some study strategies that actually work...',
    upvotes: 24,
    downvotes: 2,
    comments: 8,
    timestamp: '2 hours ago',
    userVote: null
  },
  {
    id: 2,
    author: 'GentleBreeze',
    circle: 'c/SocialAnxiety',
    title: 'Small wins: Had a conversation with a classmate today',
    content: 'It was just about the weather, but it felt huge for me. Taking it one step at a time.',
    upvotes: 156,
    downvotes: 0,
    comments: 23,
    timestamp: '4 hours ago',
    userVote: 'up'
  },
  {
    id: 3,
    author: 'CalmMountain',
    circle: 'c/MindfulMoments',
    title: 'Meditation technique that changed my perspective',
    content: 'The 5-4-3-2-1 grounding technique has been a game changer for my anxiety...',
    upvotes: 89,
    downvotes: 3,
    comments: 15,
    timestamp: '6 hours ago',
    userVote: null
  }
];

const mockComments = [
  {
    id: 1,
    postId: 1,
    author: 'PeacefulOcean',
    content: 'I totally understand this feeling. What helped me was breaking everything into smaller, manageable chunks.',
    upvotes: 12,
    timestamp: '1 hour ago',
    replies: [
      {
        id: 2,
        author: 'QuietRiver',
        content: 'Thank you, that makes a lot of sense. I\'ll try that approach.',
        upvotes: 3,
        timestamp: '30 minutes ago'
      }
    ]
  }
];

const mockResources = [
  {
    id: 1,
    title: 'Managing Exam Anxiety: A Complete Guide',
    type: 'Article',
    category: 'Academic Stress',
    description: 'Evidence-based strategies for reducing test anxiety and improving performance.',
    views: 1245,
    rating: 4.8,
    duration: '8 min read'
  },
  {
    id: 2,
    title: 'Guided Meditation for Sleep',
    type: 'Audio',
    category: 'Sleep & Rest',
    description: 'A 20-minute guided meditation to help you unwind and prepare for restful sleep.',
    views: 856,
    rating: 4.9,
    duration: '20 min'
  },
  {
    id: 3,
    title: 'Building Social Confidence',
    type: 'Video',
    category: 'Social Skills',
    description: 'Practical tips for overcoming social anxiety and building meaningful connections.',
    views: 2103,
    rating: 4.7,
    duration: '15 min'
  }
];

const mockAppointments = [
  {
    id: 1,
    student: 'Anonymous Student A',
    time: '10:00 AM',
    status: 'confirmed',
    type: 'individual'
  },
  {
    id: 2,
    student: 'Anonymous Student B',
    time: '2:00 PM',
    status: 'pending',
    type: 'group'
  }
];

const mockCaseload = [
  {
    id: 1,
    initials: 'A.S.',
    lastSession: '2 days ago',
    nextSession: 'Today 2:00 PM',
    priority: 'medium',
    notes: 3
  },
  {
    id: 2,
    initials: 'M.K.',
    lastSession: '1 week ago',
    nextSession: 'Tomorrow 10:00 AM',
    priority: 'high',
    notes: 8
  }
];

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentRole, setCurrentRole] = useState('');
  const [currentView, setCurrentView] = useState('dashboard');
  const [isAvailable, setIsAvailable] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('signin');
  const [selectedAuthRole, setSelectedAuthRole] = useState('');
  const [moodHistory, setMoodHistory] = useState([
    { date: 'Mon', mood: 4 },
    { date: 'Tue', mood: 3 },
    { date: 'Wed', mood: 5 },
    { date: 'Thu', mood: 3 },
    { date: 'Fri', mood: 4 },
    { date: 'Sat', mood: 5 },
    { date: 'Sun', mood: 4 }
  ]);
  const [currentMood, setCurrentMood] = useState(4);
  const [journalEntries, setJournalEntries] = useState([
    {
      id: 1,
      title: 'Reflection on Today',
      content: 'Today was challenging but I managed to complete my assignments...',
      date: '2024-01-15',
      mood: 4
    }
  ]);
  const [chatMessages, setChatMessages] = useState([
    { id: 1, text: 'Hello! How can I support you today?', sender: 'bot' }
  ]);

  // Authentication functions
  const handleLogin = (role) => {
    setCurrentRole(role);
    setIsAuthenticated(true);
    setShowAuthModal(false);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentRole('');
    setCurrentView('dashboard');
  };

  // Landing Page Component
  const LandingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-green-50/30">
      {/* Enhanced Navigation */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-green-100/50 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Heart className="h-9 w-9 text-green-600" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">SAKHA</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors font-medium">About</a>
              <a href="#features" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Features</a>
              <a href="#testimonials" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Stories</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Contact</a>
            </div>

            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => { setAuthMode('signin'); setShowAuthModal(true); }}
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                Sign In
              </Button>
              <Button 
                onClick={() => { setAuthMode('signup'); setShowAuthModal(true); }} 
                className="rounded-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-medium px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-200/30 to-green-200/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-gray-700">Supporting student mental wellness since 2024</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Your Mental Wellness
              <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Journey Starts Here
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              SAKHA provides a safe, supportive environment for students to access peer support, 
              professional counseling, and wellness resources. Join our caring community today.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
              <Button 
                size="lg" 
                className="rounded-full text-lg px-8 py-6 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
                onClick={() => { setSelectedAuthRole('student'); setAuthMode('signup'); setShowAuthModal(true); }}
              >
                <User className="w-5 h-5 mr-2" />
                Join as Student
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full text-lg px-8 py-6 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                onClick={() => { setSelectedAuthRole('volunteer'); setAuthMode('signup'); setShowAuthModal(true); }}
              >
                <Heart className="w-5 h-5 mr-2" />
                Volunteer to Help
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">1,200+</div>
                <div className="text-sm text-gray-600">Students Supported</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Counselors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">95%</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Everything you need for your
              <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                mental wellness journey
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support system designed specifically for students, by mental health professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Card className="rounded-3xl border-0 shadow-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Peer Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Connect with fellow students in safe, anonymous support circles. Share experiences, find understanding, and build lasting friendships.
                </p>
              </CardContent>
            </Card>
            
            <Card className="rounded-3xl border-0 shadow-xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Professional Care</h3>
                <p className="text-gray-600 leading-relaxed">
                  Access qualified counselors for personalized mental health support. Book sessions, track progress, and get expert guidance.
                </p>
              </CardContent>
            </Card>
            
            <Card className="rounded-3xl border-0 shadow-xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Wellness Resources</h3>
                <p className="text-gray-600 leading-relaxed">
                  Explore curated resources for mental health and academic success. From meditation guides to study tips, we've got you covered.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Additional Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
            <Card className="rounded-3xl border-0 shadow-lg bg-gradient-to-br from-orange-50 to-yellow-50 p-8">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-orange-500 to-yellow-500 w-12 h-12 rounded-xl flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-gray-900">AI Wellness Assistant</h4>
                    <p className="text-gray-600">24/7 AI companion for immediate support and guidance</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-0 shadow-lg bg-gradient-to-br from-pink-50 to-red-50 p-8">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-pink-500 to-red-500 w-12 h-12 rounded-xl flex items-center justify-center">
                    <PenTool className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-gray-900">Personal Journal</h4>
                    <p className="text-gray-600">Private space to reflect, track moods, and monitor progress</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-green-50/50 to-blue-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full px-4 py-2 mb-6">
                <Leaf className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-gray-700">About SAKHA</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Nurturing minds,
                <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  building futures
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                SAKHA was born from a simple belief: every student deserves access to mental health support. 
                Founded by mental health professionals and student advocates, we've created a platform that 
                breaks down barriers to care while maintaining the highest standards of safety and confidentiality.
              </p>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our name "SAKHA" means "friend" in Sanskrit - reflecting our core mission to be a trusted 
                companion on your wellness journey. We combine peer support, professional counseling, and 
                innovative technology to create a holistic support ecosystem.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="rounded-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold px-8 py-3"
                  onClick={() => { setAuthMode('signup'); setShowAuthModal(true); }}
                >
                  Join Our Community
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="rounded-full border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold px-8 py-3"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Watch Our Story
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-200/30 to-blue-200/30 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">500+</div>
                    <div className="text-sm text-gray-600">Mental Health Professionals</div>
                  </div>
                  <div className="text-center">
                    <Globe className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">50+</div>
                    <div className="text-sm text-gray-600">Universities</div>
                  </div>
                  <div className="text-center">
                    <Award className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">15</div>
                    <div className="text-sm text-gray-600">Awards Won</div>
                  </div>
                  <div className="text-center">
                    <Shield className="w-8 h-8 text-pink-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">100%</div>
                    <div className="text-sm text-gray-600">Privacy Protected</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-4 py-2 mb-6">
              <Quote className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-gray-700">Student Stories</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Real stories from our
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                community members
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from students who found support, hope, and healing through SAKHA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="rounded-3xl border-0 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50 p-8 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-blue-600 mb-4" />
                  <p className="text-gray-700 leading-relaxed">
                    "SAKHA became my safe haven during my toughest semester. The peer support forum helped me realize I wasn't alone, and the counselors provided exactly the guidance I needed."
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">A</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Alex</div>
                    <div className="text-sm text-gray-600">Computer Science Student</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-0 shadow-lg bg-gradient-to-br from-green-50 to-blue-50 p-8 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-green-600 mb-4" />
                  <p className="text-gray-700 leading-relaxed">
                    "As a volunteer, I've witnessed the incredible impact SAKHA has on students. It's beautiful to see how peer support can create such meaningful connections and healing."
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">S</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Sarah</div>
                    <div className="text-sm text-gray-600">Psychology Graduate</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50 p-8 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-purple-600 mb-4" />
                  <p className="text-gray-700 leading-relaxed">
                    "The AI wellness assistant was available when I needed support at 3 AM. Having 24/7 access to resources and immediate guidance made all the difference in my recovery."
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">M</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Maria</div>
                    <div className="text-sm text-gray-600">Pre-Med Student</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action in Testimonials */}
          <div className="text-center mt-16">
            <Card className="rounded-3xl border-0 shadow-2xl bg-gradient-to-r from-green-600 to-blue-600 p-12 max-w-4xl mx-auto">
              <CardContent className="p-0 text-center">
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Ready to start your wellness journey?
                </h3>
                <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                  Join thousands of students who have found support, community, and healing through SAKHA.
                </p>
                <Button 
                  size="lg" 
                  className="rounded-full bg-white text-green-600 hover:bg-gray-50 font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  onClick={() => { setAuthMode('signup'); setShowAuthModal(true); }}
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Footer */}
      <footer id="contact" className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <Heart className="h-8 w-8 text-green-400" />
                <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">SAKHA</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Your trusted companion for mental wellness. Supporting students on their journey to better mental health through community, care, and connection.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <Twitter className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <Facebook className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors cursor-pointer">
                  <Linkedin className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Peer Support</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Professional Counseling</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Crisis Support</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Wellness Resources</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">AI Assistant</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Resources</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Mental Health Blog</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Study Guides</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Meditation Library</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Community Guidelines</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Help Center</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Get in Touch</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">support@sakha.edu</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">1-800-SAKHA-HELP</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Available on 50+ campuses</span>
                </div>
              </div>
              
              {/* Emergency Notice */}
              <div className="mt-6 p-4 bg-red-900/30 rounded-lg border border-red-800">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertCircle className="w-4 h-4 text-red-400" />
                  <span className="text-sm font-semibold text-red-400">Crisis Support</span>
                </div>
                <p className="text-xs text-gray-300">
                  If you're in crisis, call 988 (Suicide & Crisis Lifeline) or text "HELLO" to 741741
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 SAKHA. All rights reserved. • Confidential & Secure
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-green-400 transition-colors">Accessibility</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );

  // Main render logic
  const renderCurrentView = () => {
    if (currentRole === 'student') {
      switch (currentView) {
        case 'forum': return <PeerForum />;
        case 'journal': return <StudentJournal />;
        case 'resources': return <ResourcesHub />;
        case 'journey': return <MyJourney />;
        case 'aiChat': return <AIChat />;
        case 'sos': return <SOSPage />;
        case 'booking': return <CounselorBooking />;
        default: return <StudentDashboard />;
      }
    } else if (currentRole === 'counsellor') {
      switch (currentView) {
        case 'schedule': return <CounsellorSchedule />;
        case 'caseload': return <CounsellorCaseload />;
        case 'counsellorResources': return <CounsellorResources />;
        default: return <CounsellorDashboard />;
      }
    } else if (currentRole === 'volunteer') {
      switch (currentView) {
        case 'volunteerForum': return <VolunteerForum />;
        case 'shifts': return <VolunteerShifts />;
        case 'training': return (
          <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-semibold mb-6">Training Materials</h1>
            <div className="space-y-4">
              <Card className="rounded-xl border-0 shadow-sm">
                <CardContent className="p-4">
                  <h3 className="font-medium mb-2">Active Listening Fundamentals</h3>
                  <p className="text-sm text-gray-600 mb-3">Learn the core principles of supportive listening</p>
                  <Progress value={100} className="h-2" />
                </CardContent>
              </Card>
              <Card className="rounded-xl border-0 shadow-sm">
                <CardContent className="p-4">
                  <h3 className="font-medium mb-2">Crisis Intervention Training</h3>
                  <p className="text-sm text-gray-600 mb-3">How to handle mental health crises</p>
                  <Progress value={75} className="h-2" />
                </CardContent>
              </Card>
              <Card className="rounded-xl border-0 shadow-sm">
                <CardContent className="p-4">
                  <h3 className="font-medium mb-2">Peer Support Best Practices</h3>
                  <p className="text-sm text-gray-600 mb-3">Guidelines for effective peer support</p>
                  <Progress value={50} className="h-2" />
                </CardContent>
              </Card>
            </div>
          </div>
        );
        default: return <VolunteerChat />;
      }
    } else if (currentRole === 'admin') {
      switch (currentView) {
        case 'students': return <AdminStudents />;
        case 'counsellors': return <AdminCounsellors />;
        case 'volunteers': return <AdminVolunteers />;
        case 'moderation': return <AdminModeration />;
        case 'system': return <AdminSystem />;
        default: return <AdminAnalytics />;
      }
    }
  };

  const renderNavigation = () => {
    switch (currentRole) {
      case 'student': return <StudentNavigation />;
      case 'counsellor': return <CounsellorNavigation />;
      case 'volunteer': return <VolunteerNavigation />;
      case 'admin': return <AdminNavigation />;
      default: return null;
    }
  };

  if (!isAuthenticated) {
    return (
      <>
        <LandingPage />
        <AuthModal />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-green-50/30">
      {renderNavigation()}
      <main className="pb-16 pt-4">
        {renderCurrentView()}
      </main>
    </div>
  );
}