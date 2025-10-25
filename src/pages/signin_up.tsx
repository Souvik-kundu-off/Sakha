  // Auth Modal Component
  const AuthModal = () => (
    <Dialog open={showAuthModal} onOpenChange={setShowAuthModal}>
      <DialogContent className="sm:max-w-xl p-0 overflow-hidden border-0 shadow-2xl">
        <DialogHeader className="sr-only">
          <DialogTitle>
            {authMode === 'signin' ? 'Sign In to SAKHA' : 'Join SAKHA Community'}
          </DialogTitle>
          <DialogDescription>
            {authMode === 'signin' 
              ? 'Sign in to continue your wellness journey with SAKHA' 
              : 'Create your account to start your mental wellness journey with SAKHA'
            }
          </DialogDescription>
        </DialogHeader>
        <div className="relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-200/30 to-blue-200/30 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="relative z-10 p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="relative">
                  <Heart className="h-10 w-10 text-green-600" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">SAKHA</span>
              </div>
              
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {authMode === 'signin' ? 'Welcome Back! 👋' : 'Join Our Community! 🌟'}
              </h1>
              <p className="text-gray-600 text-base">
                {authMode === 'signin' 
                  ? 'Continue your wellness journey with us' 
                  : 'Start your mental wellness journey today'
                }
              </p>
            </div>

            <div className="space-y-6">
              {/* Role Selection for Signup */}
              {authMode === 'signup' && (
                <div className="space-y-4">
                  <Label className="text-base font-semibold text-gray-800">Choose your role:</Label>
                  <div className="grid grid-cols-2 gap-3">
                    <Card 
                      className={`cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-2 ${
                        selectedAuthRole === 'student' 
                          ? 'border-green-500 bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg' 
                          : 'border-gray-200 hover:border-green-300'
                      }`}
                      onClick={() => setSelectedAuthRole('student')}
                    >
                      <CardContent className="p-4 text-center">
                        <div className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center ${
                          selectedAuthRole === 'student' 
                            ? 'bg-gradient-to-r from-green-500 to-emerald-600' 
                            : 'bg-gradient-to-r from-gray-400 to-gray-500'
                        }`}>
                          <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1">Student</h3>
                        <p className="text-xs text-gray-600">Access support & resources</p>
                      </CardContent>
                    </Card>

                    <Card 
                      className={`cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-2 ${
                        selectedAuthRole === 'counsellor' 
                          ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg' 
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                      onClick={() => setSelectedAuthRole('counsellor')}
                    >
                      <CardContent className="p-4 text-center">
                        <div className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center ${
                          selectedAuthRole === 'counsellor' 
                            ? 'bg-gradient-to-r from-blue-500 to-indigo-600' 
                            : 'bg-gradient-to-r from-gray-400 to-gray-500'
                        }`}>
                          <Heart className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1">Counsellor</h3>
                        <p className="text-xs text-gray-600">Provide professional care</p>
                      </CardContent>
                    </Card>

                    <Card 
                      className={`cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-2 ${
                        selectedAuthRole === 'volunteer' 
                          ? 'border-purple-500 bg-gradient-to-br from-purple-50 to-violet-50 shadow-lg' 
                          : 'border-gray-200 hover:border-purple-300'
                      }`}
                      onClick={() => setSelectedAuthRole('volunteer')}
                    >
                      <CardContent className="p-4 text-center">
                        <div className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center ${
                          selectedAuthRole === 'volunteer' 
                            ? 'bg-gradient-to-r from-purple-500 to-violet-600' 
                            : 'bg-gradient-to-r from-gray-400 to-gray-500'
                        }`}>
                          <Users className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1">Volunteer</h3>
                        <p className="text-xs text-gray-600">Support your peers</p>
                      </CardContent>
                    </Card>

                    <Card 
                      className={`cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-2 ${
                        selectedAuthRole === 'admin' 
                          ? 'border-red-500 bg-gradient-to-br from-red-50 to-rose-50 shadow-lg' 
                          : 'border-gray-200 hover:border-red-300'
                      }`}
                      onClick={() => setSelectedAuthRole('admin')}
                    >
                      <CardContent className="p-4 text-center">
                        <div className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center ${
                          selectedAuthRole === 'admin' 
                            ? 'bg-gradient-to-r from-red-500 to-rose-600' 
                            : 'bg-gradient-to-r from-gray-400 to-gray-500'
                        }`}>
                          <Shield className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1">Admin</h3>
                        <p className="text-xs text-gray-600">Manage the platform</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

              {/* Welcome Message for Signin */}
              {authMode === 'signin' && (
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-4 border border-green-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                      <Smile className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Welcome back to SAKHA!</h3>
                      <p className="text-sm text-gray-600">We're here to support your wellness journey</p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Form Fields */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-sm font-semibold text-gray-700 flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-gray-500" />
                    Email Address
                  </Label>
                  <Input 
                    type="email" 
                    placeholder="your.email@university.edu" 
                    className="rounded-xl border-gray-200 focus:border-green-400 focus:ring-green-400/20 h-12 text-base"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label className="text-sm font-semibold text-gray-700 flex items-center">
                    <Lock className="w-4 h-4 mr-2 text-gray-500" />
                    Password
                  </Label>
                  <Input 
                    type="password" 
                    placeholder="••••••••" 
                    className="rounded-xl border-gray-200 focus:border-green-400 focus:ring-green-400/20 h-12 text-base"
                  />
                  {authMode === 'signin' && (
                    <div className="text-right">
                      <Button variant="link" className="text-sm text-green-600 hover:text-green-700 p-0 h-auto">
                        Forgot password?
                      </Button>
                    </div>
                  )}
                </div>
                
                {authMode === 'signup' && (
                  <>
                    <div className="space-y-2">
                      <Label className="text-sm font-semibold text-gray-700 flex items-center">
                        <User className="w-4 h-4 mr-2 text-gray-500" />
                        Full Name
                      </Label>
                      <Input 
                        placeholder="Your full name" 
                        className="rounded-xl border-gray-200 focus:border-green-400 focus:ring-green-400/20 h-12 text-base"
                      />
                    </div>
                    
                    {selectedAuthRole === 'student' && (
                      <div className="space-y-2">
                        <Label className="text-sm font-semibold text-gray-700 flex items-center">
                          <CreditCard className="w-4 h-4 mr-2 text-gray-500" />
                          Student ID
                        </Label>
                        <Input 
                          placeholder="Your student ID" 
                          className="rounded-xl border-gray-200 focus:border-green-400 focus:ring-green-400/20 h-12 text-base"
                        />
                      </div>
                    )}

                    {selectedAuthRole === 'counsellor' && (
                      <>
                        <div className="space-y-2">
                          <Label className="text-sm font-semibold text-gray-700 flex items-center">
                            <Award className="w-4 h-4 mr-2 text-gray-500" />
                            License Number
                          </Label>
                          <Input 
                            placeholder="Professional license number" 
                            className="rounded-xl border-gray-200 focus:border-green-400 focus:ring-green-400/20 h-12 text-base"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-sm font-semibold text-gray-700 flex items-center">
                            <BookOpen className="w-4 h-4 mr-2 text-gray-500" />
                            Specialization
                          </Label>
                          <Select>
                            <SelectTrigger className="rounded-xl border-gray-200 focus:border-green-400 h-12">
                              <SelectValue placeholder="Select your specialization" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="clinical">Clinical Psychology</SelectItem>
                              <SelectItem value="counseling">Counseling Psychology</SelectItem>
                              <SelectItem value="social">Social Work</SelectItem>
                              <SelectItem value="therapy">Marriage & Family Therapy</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </>
                    )}

                    {selectedAuthRole === 'volunteer' && (
                      <div className="space-y-2">
                        <Label className="text-sm font-semibold text-gray-700 flex items-center">
                          <Phone className="w-4 h-4 mr-2 text-gray-500" />
                          Phone Number
                        </Label>
                        <Input 
                          placeholder="Your phone number" 
                          className="rounded-xl border-gray-200 focus:border-green-400 focus:ring-green-400/20 h-12 text-base"
                        />
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Terms and Privacy for Signup */}
              {authMode === 'signup' && (
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <div className="flex items-start space-x-3">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                      />
                    </div>
                    <div className="text-sm text-gray-600">
                      <p>I agree to SAKHA's <Button variant="link" className="p-0 h-auto text-green-600 text-sm">Terms of Service</Button> and <Button variant="link" className="p-0 h-auto text-green-600 text-sm">Privacy Policy</Button></p>
                      <p className="mt-1 text-xs text-gray-500">Your privacy and confidentiality are our top priorities</p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Main Action Button */}
              <Button 
                className="w-full rounded-xl h-12 text-base font-semibold bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5" 
                onClick={() => handleLogin(selectedAuthRole || 'student')}
              >
                {authMode === 'signin' ? (
                  <>
                    <LogIn className="w-5 h-5 mr-2" />
                    Sign In to SAKHA
                  </>
                ) : (
                  <>
                    <UserPlus className="w-5 h-5 mr-2" />
                    Create My Account
                  </>
                )}
              </Button>

              {/* Social Login Options */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="rounded-xl h-12 border-gray-200 hover:border-gray-300 transition-colors">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google
                </Button>
                <Button variant="outline" className="rounded-xl h-12 border-gray-200 hover:border-gray-300 transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.024-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.1.118.112.221.085.343-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.017z"/>
                  </svg>
                  Microsoft
                </Button>
              </div>
              
              {/* Switch Mode */}
              <div className="text-center pt-4 border-t border-gray-100">
                <p className="text-gray-600 mb-2">
                  {authMode === 'signin' 
                    ? "New to SAKHA?" 
                    : "Already have an account?"
                  }
                </p>
                <Button 
                  variant="link" 
                  onClick={() => setAuthMode(authMode === 'signin' ? 'signup' : 'signin')}
                  className="text-green-600 hover:text-green-700 font-semibold p-0 h-auto"
                >
                  {authMode === 'signin' 
                    ? "Create your account →" 
                    : "Sign in instead →"
                  }
                </Button>
              </div>

              {/* Help Section */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-100">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <HelpCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">Need help?</h4>
                    <p className="text-xs text-gray-600">Contact support at support@sakha.edu or call 1-800-SAKHA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

export { AuthModal };

