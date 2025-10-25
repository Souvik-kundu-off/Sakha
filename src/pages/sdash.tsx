  // Student Dashboard Components
  const StudentNavigation = () => (
    <nav className="bg-white/95 backdrop-blur-md border-b border-green-100/50 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-12">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Heart className="h-9 w-9 text-green-600" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">SAKHA</span>
            </div>
            <div className="hidden lg:flex items-center space-x-1">
              <Button
                variant={currentView === 'dashboard' ? 'default' : 'ghost'}
                onClick={() => setCurrentView('dashboard')}
                className={`rounded-full px-5 py-2.5 font-medium transition-all duration-300 transform hover:scale-105 ${
                  currentView === 'dashboard' 
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-200 border-0' 
                    : 'text-gray-700 hover:text-emerald-600 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 border border-transparent hover:border-emerald-200'
                }`}
              >
                <Home className="w-4 h-4 mr-2" />
                Dashboard
              </Button>
              <Button
                variant={currentView === 'forum' ? 'default' : 'ghost'}
                onClick={() => setCurrentView('forum')}
                className={`rounded-full px-5 py-2.5 font-medium transition-all duration-300 transform hover:scale-105 ${
                  currentView === 'forum' 
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-200 border-0' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 border border-transparent hover:border-blue-200'
                }`}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Forum
              </Button>
              <Button
                variant={currentView === 'booking' ? 'default' : 'ghost'}
                onClick={() => setCurrentView('booking')}
                className={`rounded-full px-5 py-2.5 font-medium transition-all duration-300 transform hover:scale-105 ${
                  currentView === 'booking' 
                    ? 'bg-gradient-to-r from-purple-500 to-violet-600 text-white shadow-lg shadow-purple-200 border-0' 
                    : 'text-gray-700 hover:text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-violet-50 border border-transparent hover:border-purple-200'
                }`}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Booking
              </Button>
              <Button
                variant={currentView === 'journal' ? 'default' : 'ghost'}
                onClick={() => setCurrentView('journal')}
                className={`rounded-full px-5 py-2.5 font-medium transition-all duration-300 transform hover:scale-105 ${
                  currentView === 'journal' 
                    ? 'bg-gradient-to-r from-pink-500 to-rose-600 text-white shadow-lg shadow-pink-200 border-0' 
                    : 'text-gray-700 hover:text-pink-600 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 border border-transparent hover:border-pink-200'
                }`}
              >
                <PenTool className="w-4 h-4 mr-2" />
                Journal
              </Button>
              <Button
                variant={currentView === 'resources' ? 'default' : 'ghost'}
                onClick={() => setCurrentView('resources')}
                className={`rounded-full px-5 py-2.5 font-medium transition-all duration-300 transform hover:scale-105 ${
                  currentView === 'resources' 
                    ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-lg shadow-orange-200 border-0' 
                    : 'text-gray-700 hover:text-orange-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 border border-transparent hover:border-orange-200'
                }`}
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Resources
              </Button>
              <Button
                variant={currentView === 'journey' ? 'default' : 'ghost'}
                onClick={() => setCurrentView('journey')}
                className={`rounded-full px-5 py-2.5 font-medium transition-all duration-300 transform hover:scale-105 ${
                  currentView === 'journey' 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-200 border-0' 
                    : 'text-gray-700 hover:text-cyan-600 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 border border-transparent hover:border-cyan-200'
                }`}
              >
                <Target className="w-4 h-4 mr-2" />
                Journey
              </Button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentView('sos')}
              className="rounded-full bg-gradient-to-r from-red-50 to-rose-50 border-red-200 text-red-600 hover:bg-gradient-to-r hover:from-red-100 hover:to-rose-100 hover:border-red-300 font-medium px-5 py-2.5 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <PhoneCall className="w-4 h-4 mr-2" />
              SOS
            </Button>
            <div className="relative cursor-pointer group">
              <Bell className="w-6 h-6 text-gray-500 group-hover:text-green-600 transition-all duration-300 group-hover:scale-110" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full animate-pulse"></div>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleLogout}
              className="rounded-full text-gray-600 hover:text-red-600 hover:bg-gradient-to-r hover:from-red-50 hover:to-rose-50 p-2.5 transition-all duration-300 transform hover:scale-105"
            >
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );

  const StudentDashboard = () => (
    <div className="max-w-7xl mx-auto p-8 space-y-8">
      <div className="bg-gradient-to-r from-blue-50 via-green-50 to-purple-50 rounded-3xl p-8 border border-green-100/50 shadow-lg">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center">
            <Smile className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Good morning! How are you feeling today?
            </h1>
            <p className="text-gray-600 text-lg">Take a moment to check in with yourself ✨</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="rounded-3xl border-0 shadow-xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center text-green-800">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-3">
                <Smile className="w-4 h-4 text-white" />
              </div>
              Quick Mood Check
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-6">
              <Frown className="w-10 h-10 text-gray-300" />
              <Meh className="w-10 h-10 text-gray-400" />
              <Smile className="w-10 h-10 text-green-600" />
            </div>
            <div className="flex gap-3">
              {[1, 2, 3, 4, 5].map((mood) => (
                <Button
                  key={mood}
                  size="sm"
                  variant={currentMood === mood ? 'default' : 'outline'}
                  onClick={() => setCurrentMood(mood)}
                  className={`rounded-full w-10 h-10 p-0 font-semibold transition-all duration-300 ${
                    currentMood === mood 
                      ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg' 
                      : 'border-green-300 text-green-600 hover:bg-green-50'
                  }`}
                >
                  {mood}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-0 shadow-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center text-blue-800">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              Community
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">Active conversations in your circles 💬</p>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-white/60 rounded-xl">
                <span className="font-medium text-sm">c/ExamStress</span>
                <Badge className="bg-orange-100 text-orange-700 rounded-full">12 new</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-white/60 rounded-xl">
                <span className="font-medium text-sm">c/SocialAnxiety</span>
                <Badge className="bg-green-100 text-green-700 rounded-full">8 new</Badge>
              </div>
            </div>
            <Button 
              size="sm" 
              onClick={() => setCurrentView('forum')}
              className="w-full mt-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg"
            >
              Join Conversations
            </Button>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-0 shadow-xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center text-purple-800">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <Target className="w-4 h-4 text-white" />
              </div>
              Your Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">Weekly Goals</span>
                  <span className="text-purple-600 font-semibold">3/5</span>
                </div>
                <Progress value={60} className="h-3 bg-purple-100" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium">Mindfulness Streak</span>
                  <span className="text-green-600 font-semibold">7 days 🔥</span>
                </div>
                <Progress value={100} className="h-3 bg-green-100" />
              </div>
            </div>
            <Button 
              size="sm" 
              variant="outline"
              onClick={() => setCurrentView('journey')}
              className="w-full mt-4 rounded-full border-purple-300 text-purple-600 hover:bg-purple-600 hover:text-white"
            >
              View Journey
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="rounded-3xl border-0 shadow-xl bg-gradient-to-br from-indigo-50 to-blue-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                <Activity className="w-4 h-4 text-white" />
              </div>
              This Week's Mood
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between h-32 bg-white/50 rounded-xl p-4">
              {moodHistory.map((day, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div 
                    className="w-6 bg-gradient-to-t from-blue-500 to-indigo-500 rounded-t mb-2 shadow-sm" 
                    style={{ height: `${day.mood * 16}px` }}
                  />
                  <span className="text-xs text-gray-600 font-medium">{day.date}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <span className="text-sm text-gray-600">Average: </span>
              <span className="font-semibold text-blue-600">4.0/5 😊</span>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-0 shadow-xl bg-gradient-to-br from-violet-50 to-purple-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-600 rounded-lg flex items-center justify-center mr-3">
                <Bot className="w-4 h-4 text-white" />
              </div>
              AI Wellness Assistant
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">Get personalized support anytime 🤖✨</p>
            <div className="bg-white/60 rounded-xl p-3 mb-4">
              <p className="text-xs text-gray-700">"How can I help you feel better today?"</p>
            </div>
            <Button 
              size="sm" 
              onClick={() => setCurrentView('aiChat')}
              className="w-full rounded-full bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white shadow-lg"
            >
              <Bot className="w-4 h-4 mr-2" />
              Chat with AI
            </Button>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-0 shadow-xl bg-gradient-to-br from-emerald-50 to-green-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3">
                <Calendar className="w-4 h-4 text-white" />
              </div>
              Counseling
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">Book a session with a counselor 🩺💚</p>
            <div className="bg-white/60 rounded-xl p-3 mb-4">
              <p className="text-xs text-gray-700">Next available: Today 3:00 PM</p>
            </div>
            <Button 
              size="sm" 
              onClick={() => setCurrentView('booking')}
              className="w-full rounded-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book Session
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const PeerForum = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/50">
      <div className="max-w-7xl mx-auto p-8 space-y-8">
        <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-8 border border-blue-100/50 shadow-lg">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Peer Support Forum
              </h1>
              <p className="text-gray-600 text-lg">Connect, share, and support each other on your wellness journey 💙</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-2">
                    <Plus className="w-4 h-4 mr-2" />
                    Create Post
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Share with the community</DialogTitle>
                    <DialogDescription>
                      Your voice matters. Share your thoughts, experiences, or questions.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a circle" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="examstress">c/ExamStress</SelectItem>
                        <SelectItem value="socialanxiety">c/SocialAnxiety</SelectItem>
                        <SelectItem value="mindfulmoments">c/MindfulMoments</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input placeholder="What's on your mind?" />
                    <Textarea placeholder="Share your thoughts..." rows={4} />
                    <Button className="w-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700">Share with Community</Button>
                  </div>
                </DialogContent>
              </Dialog>

              <div className="flex gap-2 flex-wrap">
                <Button size="sm" variant="outline" className="rounded-full border-blue-300 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
                  <Filter className="w-4 h-4 mr-2" />
                  All Circles
                </Button>
                <Button size="sm" variant="outline" className="rounded-full border-orange-300 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300">🔥 Hot</Button>
                <Button size="sm" variant="outline" className="rounded-full border-green-300 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300">✨ New</Button>
                <Button size="sm" variant="outline" className="rounded-full border-purple-300 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300">⭐ Top</Button>
              </div>
            </div>

            <div className="space-y-6">
              {mockPosts.map((post, index) => (
                <Card 
                  key={post.id} 
                  className="rounded-3xl border-0 shadow-xl bg-gradient-to-br from-white to-blue-50/30 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex flex-col items-center space-y-2 bg-gradient-to-b from-blue-50 to-indigo-50 rounded-2xl p-3">
                        <Button 
                          size="sm" 
                          variant={post.userVote === 'up' ? 'default' : 'ghost'}
                          className={`p-2 h-10 w-10 rounded-xl transition-all duration-300 ${
                            post.userVote === 'up' 
                              ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg' 
                              : 'hover:bg-green-100 hover:text-green-600'
                          }`}
                        >
                          <TrendingUp className="w-4 h-4" />
                        </Button>
                        <span className="text-lg font-bold text-blue-700">{post.upvotes - post.downvotes}</span>
                        <Button 
                          size="sm" 
                          variant={post.userVote === 'down' ? 'default' : 'ghost'}
                          className={`p-2 h-10 w-10 rounded-xl transition-all duration-300 ${
                            post.userVote === 'down' 
                              ? 'bg-gradient-to-r from-red-500 to-rose-600 text-white shadow-lg' 
                              : 'hover:bg-red-100 hover:text-red-600'
                          }`}
                        >
                          <TrendingDown className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 text-sm mb-3">
                          <Badge 
                            variant="outline" 
                            className={`rounded-full px-3 py-1 font-medium ${
                              post.circle === 'c/ExamStress' ? 'bg-orange-100 text-orange-700 border-orange-300' :
                              post.circle === 'c/SocialAnxiety' ? 'bg-green-100 text-green-700 border-green-300' :
                              'bg-purple-100 text-purple-700 border-purple-300'
                            }`}
                          >
                            {post.circle}
                          </Badge>
                          <span className="text-gray-500">•</span>
                          <span className="text-blue-600 font-medium">by {post.author}</span>
                          <span className="text-gray-500">•</span>
                          <span className="text-gray-500">{post.timestamp}</span>
                        </div>
                        <h3 className="font-bold text-xl mb-3 text-gray-900">{post.title}</h3>
                        <p className="text-gray-700 text-base mb-4 leading-relaxed">{post.content}</p>
                        <div className="flex items-center space-x-6 text-sm">
                          <Button variant="ghost" size="sm" className="p-0 h-auto text-blue-600 hover:text-blue-800 transition-colors">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            {post.comments} comments
                          </Button>
                          <Button variant="ghost" size="sm" className="p-0 h-auto text-green-600 hover:text-green-800 transition-colors">
                            <Heart className="w-4 h-4 mr-2" />
                            Support
                          </Button>
                          <Button variant="ghost" size="sm" className="p-0 h-auto text-purple-600 hover:text-purple-800 transition-colors">
                            <Share2 className="w-4 h-4 mr-2" />
                            Share
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Card className="rounded-3xl border-0 shadow-xl bg-gradient-to-br from-blue-50 to-indigo-100">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-blue-800">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  Support Circles
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Card className="rounded-2xl border-0 shadow-md bg-gradient-to-r from-orange-50 to-orange-100 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="font-bold text-orange-800">c/ExamStress</h4>
                    </div>
                    <p className="text-sm text-orange-700 mb-2">Academic pressure & study support</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-orange-600">1.2k members</span>
                      <Badge className="bg-orange-200 text-orange-800 rounded-full text-xs">12 active</Badge>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="rounded-2xl border-0 shadow-md bg-gradient-to-r from-green-50 to-green-100 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                        <Heart className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="font-bold text-green-800">c/SocialAnxiety</h4>
                    </div>
                    <p className="text-sm text-green-700 mb-2">Building confidence & connections</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-green-600">856 members</span>
                      <Badge className="bg-green-200 text-green-800 rounded-full text-xs">8 active</Badge>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="rounded-2xl border-0 shadow-md bg-gradient-to-r from-purple-50 to-purple-100 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="font-bold text-purple-800">c/MindfulMoments</h4>
                    </div>
                    <p className="text-sm text-purple-700 mb-2">Mindfulness & inner peace</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-purple-600">2.1k members</span>
                      <Badge className="bg-purple-200 text-purple-800 rounded-full text-xs">15 active</Badge>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-0 shadow-xl bg-gradient-to-br from-cyan-50 to-blue-100">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-cyan-800">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  Community Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-cyan-700">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span>Be kind and supportive to everyone</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-cyan-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Respect privacy and anonymity</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-cyan-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>No medical advice - seek professionals</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-cyan-700">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Report concerning content immediately</span>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-0 shadow-xl bg-gradient-to-br from-rose-50 to-pink-100">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-rose-800">
                  <div className="w-8 h-8 bg-gradient-to-r from-rose-500 to-pink-600 rounded-lg flex items-center justify-center mr-3">
                    <HelpCircle className="w-4 h-4 text-white" />
                  </div>
                  Need Support?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-rose-700 mb-3">Feeling overwhelmed? You're not alone.</p>
                <Button variant="outline" className="w-full rounded-full border-rose-300 text-rose-600 hover:bg-rose-600 hover:text-white transition-all duration-300">
                  <Bot className="w-4 h-4 mr-2" />
                  Chat with AI Assistant
                </Button>
                <Button variant="outline" className="w-full rounded-full border-rose-300 text-rose-600 hover:bg-rose-600 hover:text-white transition-all duration-300">
                  <PhoneCall className="w-4 h-4 mr-2" />
                  Crisis Support Line
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {selectedPost && (
          <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
            <DialogContent className="sm:max-w-2xl">
              <DialogHeader>
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                  <Badge variant="outline" className="rounded-full">
                    {selectedPost.circle}
                  </Badge>
                  <span>•</span>
                  <span>by {selectedPost.author}</span>
                  <span>•</span>
                  <span>{selectedPost.timestamp}</span>
                </div>
                <DialogTitle>{selectedPost.title}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <p className="text-gray-700">{selectedPost.content}</p>
                <Separator />
                <div>
                  <h4 className="font-medium mb-3">Comments</h4>
                  <div className="space-y-4">
                    {mockComments.filter(c => c.postId === selectedPost.id).map((comment) => (
                      <div key={comment.id} className="space-y-2">
                        <div className="flex items-start space-x-3">
                          <Avatar className="w-8 h-8">
                            <AvatarFallback>{comment.author[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="bg-gray-50 rounded-lg p-3">
                              <div className="flex items-center space-x-2 text-sm text-gray-600 mb-1">
                                <span className="font-medium">{comment.author}</span>
                                <span>•</span>
                                <span>{comment.timestamp}</span>
                              </div>
                              <p className="text-sm">{comment.content}</p>
                            </div>
                            {comment.replies && comment.replies.map((reply) => (
                              <div key={reply.id} className="ml-6 mt-2">
                                <div className="bg-gray-50 rounded-lg p-3">
                                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-1">
                                    <span className="font-medium">{reply.author}</span>
                                    <span>•</span>
                                    <span>{reply.timestamp}</span>
                                  </div>
                                  <p className="text-sm">{reply.content}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex space-x-2">
                    <Input placeholder="Add a supportive comment..." className="flex-1" />
                    <Button size="sm" className="rounded-full">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </div>
  );

  const ResourcesHub = () => (
    <div className="min-h-screen bg-gradient-to-br from-orange-50/50 via-amber-50/30 to-yellow-50/50">
      <div className="max-w-7xl mx-auto p-8 space-y-8">
        <div className="bg-gradient-to-r from-orange-50 via-amber-50 to-yellow-50 rounded-3xl p-8 border border-orange-100/50 shadow-lg">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Wellness Resources Hub
              </h1>
              <p className="text-gray-600 text-lg">Discover curated content to support your mental health journey 📚</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-orange-100/50 shadow-sm">
          <div className="flex gap-3 flex-wrap">
            <Button size="sm" variant="outline" className="rounded-full border-orange-300 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300">
              📖 All Categories
            </Button>
            <Button size="sm" variant="outline" className="rounded-full border-blue-300 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
              🎓 Academic Stress
            </Button>
            <Button size="sm" variant="outline" className="rounded-full border-green-300 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300">
              💬 Social Skills
            </Button>
            <Button size="sm" variant="outline" className="rounded-full border-purple-300 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300">
              😴 Sleep & Rest
            </Button>
          </div>
          <div className="flex gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Search resources..." className="pl-10 w-64 rounded-full border-orange-200 focus:border-orange-400" />
            </div>
            <Select>
              <SelectTrigger className="w-40 rounded-full border-orange-200">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockResources.map((resource, index) => (
            <Card key={resource.id} className="rounded-3xl border-0 shadow-xl bg-gradient-to-br from-white to-orange-50/30 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <Badge 
                    variant="outline" 
                    className={`rounded-full px-3 py-1 font-medium ${
                      resource.type === 'Article' ? 'bg-blue-100 text-blue-700 border-blue-300' :
                      resource.type === 'Audio' ? 'bg-green-100 text-green-700 border-green-300' :
                      'bg-purple-100 text-purple-700 border-purple-300'
                    }`}
                  >
                    {resource.type === 'Article' && <FileText className="w-3 h-3 mr-1" />}
                    {resource.type === 'Audio' && <Headphones className="w-3 h-3 mr-1" />}
                    {resource.type === 'Video' && <Video className="w-3 h-3 mr-1" />}
                    {resource.type}
                  </Badge>
                  <div className="flex items-center space-x-1 bg-yellow-100 rounded-full px-2 py-1">
                    <Star className="w-4 h-4 text-yellow-600 fill-current" />
                    <span className="text-sm font-semibold text-yellow-700">{resource.rating}</span>
                  </div>
                </div>
                
                <div className={`w-full h-32 rounded-2xl mb-4 flex items-center justify-center ${
                  resource.type === 'Article' ? 'bg-gradient-to-br from-blue-100 to-blue-200' :
                  resource.type === 'Audio' ? 'bg-gradient-to-br from-green-100 to-green-200' :
                  'bg-gradient-to-br from-purple-100 to-purple-200'
                }`}>
                  {resource.type === 'Article' && <FileText className="w-12 h-12 text-blue-600" />}
                  {resource.type === 'Audio' && <Headphones className="w-12 h-12 text-green-600" />}
                  {resource.type === 'Video' && <Video className="w-12 h-12 text-purple-600" />}
                </div>
                
                <h3 className="font-bold text-lg mb-3 text-gray-900 line-clamp-2">{resource.title}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">{resource.description}</p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Eye className="w-3 h-3" />
                    <span>{resource.views} views</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{resource.duration}</span>
                  </div>
                </div>
                
                <Button className={`w-full rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
                  resource.type === 'Article' ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700' :
                  resource.type === 'Audio' ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700' :
                  'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700'
                } text-white`}>
                  {resource.type === 'Audio' && <Headphones className="w-4 h-4 mr-2" />}
                  {resource.type === 'Video' && <Video className="w-4 h-4 mr-2" />}
                  {resource.type === 'Article' && <FileText className="w-4 h-4 mr-2" />}
                  Access Resource
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <Card className="rounded-3xl border-0 shadow-xl bg-gradient-to-br from-blue-50 to-blue-100">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-blue-800 mb-2">Study Skills</h3>
              <p className="text-sm text-blue-700 mb-3">Effective learning strategies and techniques</p>
              <Button variant="outline" size="sm" className="rounded-full border-blue-300 text-blue-600 hover:bg-blue-600 hover:text-white">
                Explore
              </Button>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-0 shadow-xl bg-gradient-to-br from-green-50 to-green-100">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-green-800 mb-2">Mindfulness</h3>
              <p className="text-sm text-green-700 mb-3">Meditation and relaxation guides</p>
              <Button variant="outline" size="sm" className="rounded-full border-green-300 text-green-600 hover:bg-green-600 hover:text-white">
                Explore
              </Button>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-0 shadow-xl bg-gradient-to-br from-purple-50 to-purple-100">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-purple-800 mb-2">Self-Care</h3>
              <p className="text-sm text-purple-700 mb-3">Daily wellness and self-care practices</p>
              <Button variant="outline" size="sm" className="rounded-full border-purple-300 text-purple-600 hover:bg-purple-600 hover:text-white">
                Explore
              </Button>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-0 shadow-xl bg-gradient-to-br from-rose-50 to-pink-100">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-rose-800 mb-2">Relationships</h3>
              <p className="text-sm text-rose-700 mb-3">Building healthy connections and communication</p>
              <Button variant="outline" size="sm" className="rounded-full border-rose-300 text-rose-600 hover:bg-rose-600 hover:text-white">
                Explore
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  const MyJourney = () => (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50/50 via-blue-50/30 to-indigo-50/50">
      <div className="max-w-7xl mx-auto p-8 space-y-8">
        <div className="bg-gradient-to-r from-cyan-50 via-blue-50 to-indigo-50 rounded-3xl p-8 border border-cyan-100/50 shadow-lg">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                My Wellness Journey
              </h1>
              <p className="text-gray-600 text-lg">Track your progress, celebrate achievements, and reach your goals 🎯</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="rounded-3xl border-0 shadow-xl bg-gradient-to-br from-yellow-50 to-orange-100">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-yellow-800">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center mr-3">
                  <Award className="w-4 h-4 text-white" />
                </div>
                Achievements
              </CardTitle>
              <CardDescription className="text-yellow-700">Celebrating your progress and milestones</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Card className="rounded-2xl border-0 shadow-md bg-gradient-to-r from-yellow-100 to-orange-100 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-yellow-800">7-Day Streak</h4>
                      <p className="text-sm text-yellow-700">Daily check-ins completed</p>
                    </div>
                  </div>
                  <div className="bg-white/60 rounded-lg p-2">
                    <p className="text-xs text-yellow-600">🔥 Keep the momentum going!</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="rounded-2xl border-0 shadow-md bg-gradient-to-r from-green-100 to-emerald-100 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-green-800">Community Helper</h4>
                      <p className="text-sm text-green-700">Supported 5 peers this month</p>
                    </div>
                  </div>
                  <div className="bg-white/60 rounded-lg p-2">
                    <p className="text-xs text-green-600">💚 Making a difference!</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-0 shadow-md bg-gradient-to-r from-purple-100 to-violet-100 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-purple-800">Mindful Explorer</h4>
                      <p className="text-sm text-purple-700">Completed 10 meditation sessions</p>
                    </div>
                  </div>
                  <div className="bg-white/60 rounded-lg p-2">
                    <p className="text-xs text-purple-600">🧘‍♀️ Inner peace achieved!</p>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-0 shadow-xl bg-gradient-to-br from-blue-50 to-indigo-100">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-blue-800">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                  <Target className="w-4 h-4 text-white" />
                </div>
                Current Goals
              </CardTitle>
              <CardDescription className="text-blue-700">Your active wellness objectives</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-blue-800">Daily mindfulness practice</span>
                  <Badge className="bg-green-100 text-green-700 rounded-full">7/7 days</Badge>
                </div>
                <Progress value={100} className="h-3 bg-blue-100" />
                <p className="text-xs text-blue-600">🎉 Goal completed! You're on fire!</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-blue-800">Connect with new people</span>
                  <Badge className="bg-orange-100 text-orange-700 rounded-full">2/3 people</Badge>
                </div>
                <Progress value={67} className="h-3 bg-blue-100" />
                <p className="text-xs text-blue-600">💪 Almost there! One more connection to go.</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-blue-800">Journal writing streak</span>
                  <Badge className="bg-purple-100 text-purple-700 rounded-full">12/14 days</Badge>
                </div>
                <Progress value={86} className="h-3 bg-blue-100" />
                <p className="text-xs text-blue-600">✍️ Great consistency! Keep writing.</p>
              </div>

              <Button className="w-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-lg">
                <Plus className="w-4 h-4 mr-2" />
                Set New Goal
              </Button>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-0 shadow-xl bg-gradient-to-br from-emerald-50 to-cyan-100">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-emerald-800">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-lg flex items-center justify-center mr-3">
                  <Activity className="w-4 h-4 text-white" />
                </div>
                Quick Stats
              </CardTitle>
              <CardDescription className="text-emerald-700">Your wellness metrics at a glance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-4 bg-white/60 rounded-2xl">
                  <div className="text-2xl font-bold text-emerald-600">4.2</div>
                  <div className="text-sm text-emerald-700">Avg Mood</div>
                </div>
                <div className="text-center p-4 bg-white/60 rounded-2xl">
                  <div className="text-2xl font-bold text-cyan-600">15</div>
                  <div className="text-sm text-cyan-700">Resources Used</div>
                </div>
                <div className="text-center p-4 bg-white/60 rounded-2xl">
                  <div className="text-2xl font-bold text-blue-600">8</div>
                  <div className="text-sm text-blue-700">Forum Posts</div>
                </div>
                <div className="text-center p-4 bg-white/60 rounded-2xl">
                  <div className="text-2xl font-bold text-green-600">23</div>
                  <div className="text-sm text-green-700">Days Active</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-emerald-700">Weekly Engagement</span>
                  <span className="font-semibold text-emerald-600">92%</span>
                </div>
                <Progress value={92} className="h-2 bg-emerald-100" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="rounded-3xl border-0 shadow-xl bg-gradient-to-br from-white to-cyan-50/30">
          <CardHeader className="pb-6">
            <CardTitle className="flex items-center text-2xl">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                <Activity className="w-5 h-5 text-white" />
              </div>
              Mood Journey
            </CardTitle>
            <CardDescription className="text-base">Your emotional wellness over time - tracking patterns and progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-cyan-50/50 to-blue-50/50 rounded-2xl p-6 border border-cyan-100/50">
                <div className="flex items-end justify-between h-48">
                  {moodHistory.map((day, index) => (
                    <div key={index} className="flex flex-col items-center space-y-2">
                      <div className="relative">
                        <div 
                          className="w-8 bg-gradient-to-t from-cyan-500 via-blue-500 to-indigo-500 rounded-t-lg shadow-lg transition-all duration-300 hover:scale-110" 
                          style={{ height: `${day.mood * 25 + 20}px` }}
                        />
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                          <div className="bg-white rounded-full px-2 py-1 shadow-md">
                            <span className="text-xs font-bold text-gray-700">{day.mood}</span>
                          </div>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-gray-700">{day.date}</span>
                      <div className={`w-3 h-3 rounded-full ${
                        day.mood >= 4 ? 'bg-green-500' :
                        day.mood >= 3 ? 'bg-yellow-500' :
                        'bg-red-500'
                      }`}></div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl">
                  <div className="text-lg font-bold text-green-800">4.0/5</div>
                  <div className="text-sm text-green-700">Average mood this week</div>
                  <div className="flex items-center justify-center mt-2">
                    <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                    <span className="text-xs text-green-600">Improving trend</span>
                  </div>
                </div>
                
                <div className="text-center p-4 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl">
                  <div className="text-lg font-bold text-blue-800">Wed & Sat</div>
                  <div className="text-sm text-blue-700">Best days this week</div>
                  <div className="flex items-center justify-center mt-2">
                    <Star className="w-4 h-4 text-yellow-500 mr-1 fill-current" />
                    <span className="text-xs text-blue-600">Peak wellness</span>
                  </div>
                </div>
                
                <div className="text-center p-4 bg-gradient-to-r from-purple-100 to-violet-100 rounded-2xl">
                  <div className="text-lg font-bold text-purple-800">85%</div>
                  <div className="text-sm text-purple-700">Positive mood days</div>
                  <div className="flex items-center justify-center mt-2">
                    <Heart className="w-4 h-4 text-purple-600 mr-1 fill-current" />
                    <span className="text-xs text-purple-600">Great progress</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="rounded-3xl border-0 shadow-xl bg-gradient-to-br from-rose-50 to-pink-100">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-rose-800">
                <div className="w-8 h-8 bg-gradient-to-r from-rose-500 to-pink-600 rounded-lg flex items-center justify-center mr-3">
                  <Calendar className="w-4 h-4 text-white" />
                </div>
                Weekly Reflection
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white/60 rounded-2xl p-4">
                <h4 className="font-bold text-rose-800 mb-2">This Week's Highlights</h4>
                <ul className="space-y-2 text-sm text-rose-700">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Maintained daily mindfulness streak</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Connected with 2 new people in forums</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Completed 4 wellness resources</span>
                  </li>
                </ul>
              </div>
              <Button variant="outline" className="w-full rounded-full border-rose-300 text-rose-600 hover:bg-rose-600 hover:text-white transition-all duration-300">
                <FileText className="w-4 h-4 mr-2" />
                View Full Report
              </Button>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-0 shadow-xl bg-gradient-to-br from-violet-50 to-purple-100">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-violet-800">
                <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                Personalized Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white/60 rounded-2xl p-4">
                <h4 className="font-bold text-violet-800 mb-2">AI Recommendations</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <p className="text-sm text-violet-700">Your mood tends to be higher on days when you practice mindfulness</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-sm text-violet-700">Consider setting aside time for social connections on weekdays</p>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="w-full rounded-full border-violet-300 text-violet-600 hover:bg-violet-600 hover:text-white transition-all duration-300">
                <Bot className="w-4 h-4 mr-2" />
                Get More Insights
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  // Student Journal Component
  const StudentJournal = () => (
    <div className="min-h-screen bg-gradient-to-br from-pink-50/50 via-rose-50/30 to-purple-50/50">
      <div className="max-w-6xl mx-auto p-8 space-y-8">
        <div className="bg-gradient-to-r from-pink-50 via-rose-50 to-purple-50 rounded-3xl p-8 border border-pink-100/50 shadow-lg">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full flex items-center justify-center">
              <PenTool className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                My Personal Journal
              </h1>
              <p className="text-gray-600 text-lg">A safe space to express your thoughts and track your emotional journey 💕</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-6">
            <div className="flex justify-between items-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="rounded-full bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-2">
                    <Plus className="w-4 h-4 mr-2" />
                    New Entry
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Create Journal Entry</DialogTitle>
                    <DialogDescription>
                      Express your thoughts and feelings in a safe, private space
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <Input placeholder="Entry title..." className="rounded-xl" />
                    <Textarea placeholder="What's on your mind today?" rows={8} className="rounded-xl" />
                    <div className="flex items-center space-x-4">
                      <Label>How are you feeling?</Label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((mood) => (
                          <Button
                            key={mood}
                            size="sm"
                            variant="outline"
                            className="rounded-full w-10 h-10 p-0 border-pink-300 text-pink-600 hover:bg-pink-600 hover:text-white transition-all duration-300"
                          >
                            {mood}
                          </Button>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full rounded-full bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700">Save Entry</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="space-y-6">
              {journalEntries.map((entry, index) => (
                <Card key={entry.id} className="rounded-3xl border-0 shadow-xl bg-gradient-to-br from-white to-pink-50/30 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="font-bold text-2xl text-gray-900 mb-2">{entry.title}</h3>
                        <div className="flex items-center space-x-4 text-sm">
                          <div className="flex items-center space-x-2 text-gray-600">
                            <Calendar className="w-4 h-4 text-pink-500" />
                            <span>{entry.date}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className={`w-3 h-3 rounded-full ${
                              entry.mood >= 4 ? 'bg-green-500' :
                              entry.mood >= 3 ? 'bg-yellow-500' :
                              'bg-red-500'
                            }`}></div>
                            <span className="text-sm text-gray-600">Mood: {entry.mood}/5</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full px-3 py-1">
                          {entry.mood >= 4 ? <Smile className="w-4 h-4 text-green-600" /> :
                           entry.mood >= 3 ? <Meh className="w-4 h-4 text-yellow-600" /> :
                           <Frown className="w-4 h-4 text-red-600" />}
                          <span className="text-sm font-medium">{entry.mood}/5</span>
                        </div>
                        <Button variant="ghost" size="sm" className="rounded-full hover:bg-pink-100 transition-colors">
                          <Edit className="w-4 h-4 text-pink-600" />
                        </Button>
                        <Button variant="ghost" size="sm" className="rounded-full hover:bg-pink-100 transition-colors">
                          <MoreHorizontal className="w-4 h-4 text-pink-600" />
                        </Button>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-pink-50/50 to-rose-50/50 rounded-2xl p-6 border border-pink-100/50">
                      <p className="text-gray-700 leading-relaxed text-base">{entry.content}</p>
                    </div>
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-pink-100">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>Private</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>5 min read</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm" className="rounded-full text-pink-600 hover:bg-pink-100">
                          <Heart className="w-4 h-4 mr-1" />
                          Favorite
                        </Button>
                        <Button variant="ghost" size="sm" className="rounded-full text-purple-600 hover:bg-purple-100">
                          <Share2 className="w-4 h-4 mr-1" />
                          Reflect
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Add more sample entries for visual variety */}
              <Card className="rounded-3xl border-0 shadow-xl bg-gradient-to-br from-white to-purple-50/30 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="font-bold text-2xl text-gray-900 mb-2">Gratitude Practice</h3>
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Calendar className="w-4 h-4 text-pink-500" />
                          <span>2024-01-14</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          <span className="text-sm text-gray-600">Mood: 5/5</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full px-3 py-1">
                        <Smile className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-medium">5/5</span>
                      </div>
                      <Button variant="ghost" size="sm" className="rounded-full hover:bg-pink-100 transition-colors">
                        <Edit className="w-4 h-4 text-pink-600" />
                      </Button>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50/50 to-pink-50/50 rounded-2xl p-6 border border-purple-100/50">
                    <p className="text-gray-700 leading-relaxed text-base">
                      Today I'm grateful for the warm conversation I had with my friend during lunch. 
                      It reminded me that I'm not alone in facing challenges. I also appreciate the 
                      beautiful sunset I witnessed while walking back to my dorm - it filled me with 
                      a sense of peace and wonder.
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-purple-100">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>Private</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>3 min read</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" className="rounded-full text-pink-600 hover:bg-pink-100">
                        <Heart className="w-4 h-4 mr-1 fill-current" />
                        Favorited
                      </Button>
                      <Button variant="ghost" size="sm" className="rounded-full text-purple-600 hover:bg-purple-100">
                        <Sparkles className="w-4 h-4 mr-1" />
                        Inspire
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="rounded-3xl border-0 shadow-xl bg-gradient-to-br from-pink-50 to-rose-100">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-pink-800">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg flex items-center justify-center mr-3">
                    <Activity className="w-4 h-4 text-white" />
                  </div>
                  Writing Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-white/60 rounded-2xl">
                  <div className="text-2xl font-bold text-pink-600">7</div>
                  <div className="text-sm text-pink-700">Day Streak</div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-white/60 rounded-xl">
                    <div className="text-lg font-bold text-gray-800">12</div>
                    <div className="text-xs text-gray-600">Total Entries</div>
                  </div>
                  <div className="text-center p-3 bg-white/60 rounded-xl">
                    <div className="text-lg font-bold text-gray-800">4.2</div>
                    <div className="text-xs text-gray-600">Avg Mood</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-0 shadow-xl bg-gradient-to-br from-purple-50 to-violet-100">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-purple-800">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-600 rounded-lg flex items-center justify-center mr-3">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  Writing Prompts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-white/60 rounded-xl cursor-pointer hover:bg-white/80 transition-colors">
                  <p className="text-sm text-purple-700 font-medium">What made you smile today?</p>
                </div>
                <div className="p-3 bg-white/60 rounded-xl cursor-pointer hover:bg-white/80 transition-colors">
                  <p className="text-sm text-purple-700 font-medium">Describe a moment of peace you experienced</p>
                </div>
                <div className="p-3 bg-white/60 rounded-xl cursor-pointer hover:bg-white/80 transition-colors">
                  <p className="text-sm text-purple-700 font-medium">What are you most grateful for right now?</p>
                </div>
                <Button variant="outline" className="w-full rounded-full border-purple-300 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300">
                  More Prompts
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-0 shadow-xl bg-gradient-to-br from-emerald-50 to-green-100">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-emerald-800">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-600 rounded-lg flex items-center justify-center mr-3">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  Reflection Goals
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-emerald-700">Daily Writing</span>
                    <span className="text-emerald-600 font-semibold">7/7 days</span>
                  </div>
                  <Progress value={100} className="h-2 bg-emerald-100" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-emerald-700">Gratitude Practice</span>
                    <span className="text-emerald-600 font-semibold">5/7 days</span>
                  </div>
                  <Progress value={71} className="h-2 bg-emerald-100" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-emerald-700">Mood Tracking</span>
                    <span className="text-emerald-600 font-semibold">12/14 days</span>
                  </div>
                  <Progress value={86} className="h-2 bg-emerald-100" />
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-0 shadow-xl bg-gradient-to-br from-amber-50 to-orange-100">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-amber-800">
                  <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg flex items-center justify-center mr-3">
                    <Leaf className="w-4 h-4 text-white" />
                  </div>
                  Mindful Moments
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-amber-700 mb-3">Take a moment to reflect and breathe</p>
                <Button variant="outline" className="w-full rounded-full border-amber-300 text-amber-600 hover:bg-amber-600 hover:text-white transition-all duration-300">
                  <Heart className="w-4 h-4 mr-2" />
                  Practice Gratitude
                </Button>
                <Button variant="outline" className="w-full rounded-full border-amber-300 text-amber-600 hover:bg-amber-600 hover:text-white transition-all duration-300">
                  <Sun className="w-4 h-4 mr-2" />
                  Breathing Exercise
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );

  // AI Chat Component
  const AIChat = () => (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="rounded-xl border-0 shadow-sm h-96">
        <CardHeader className="border-b">
          <CardTitle className="flex items-center">
            <Bot className="w-5 h-5 mr-2 text-purple-600" />
            AI Wellness Assistant
          </CardTitle>
          <CardDescription>
            A supportive AI companion for your mental wellness journey
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col h-full p-0">
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {chatMessages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs rounded-lg p-3 ${
                      message.sender === 'user'
                        ? 'bg-purple-500 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          <div className="border-t p-4">
            <div className="flex space-x-2">
              <Input 
                placeholder="Share what's on your mind..." 
                className="flex-1"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    setChatMessages([...chatMessages, 
                      { id: chatMessages.length + 1, text: e.target.value, sender: 'user' },
                      { id: chatMessages.length + 2, text: "I understand you're going through a difficult time. Would you like to talk about what's making you feel this way?", sender: 'bot' }
                    ]);
                    e.target.value = '';
                  }
                }}
              />
              <Button size="sm" className="rounded-full">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  // SOS Component
  const SOSPage = () => (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 border border-red-200">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-red-600 mx-auto mb-4" />
          <h1 className="text-2xl font-semibold text-red-800 mb-2">
            Crisis Support
          </h1>
          <p className="text-red-700 mb-6">
            If you're in immediate danger or having thoughts of self-harm, please reach out for help right away.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="rounded-xl border-0 shadow-sm bg-red-50">
          <CardContent className="p-6 text-center">
            <PhoneCall className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Emergency Services</h3>
            <p className="text-sm text-gray-600 mb-4">For immediate life-threatening emergencies</p>
            <Button className="w-full bg-red-600 hover:bg-red-700 rounded-full">
              <PhoneCall className="w-4 h-4 mr-2" />
              Call 911
            </Button>
          </CardContent>
        </Card>

        <Card className="rounded-xl border-0 shadow-sm bg-blue-50">
          <CardContent className="p-6 text-center">
            <MessageCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Crisis Text Line</h3>
            <p className="text-sm text-gray-600 mb-4">24/7 support via text message</p>
            <Button variant="outline" className="w-full rounded-full">
              <MessageCircle className="w-4 h-4 mr-2" />
              Text 741741
            </Button>
          </CardContent>
        </Card>

        <Card className="rounded-xl border-0 shadow-sm bg-green-50">
          <CardContent className="p-6 text-center">
            <Heart className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Campus Counselor</h3>
            <p className="text-sm text-gray-600 mb-4">Connect with on-campus mental health services</p>
            <Button variant="outline" className="w-full rounded-full">
              <Calendar className="w-4 h-4 mr-2" />
              Emergency Session
            </Button>
          </CardContent>
        </Card>

        <Card className="rounded-xl border-0 shadow-sm bg-purple-50">
          <CardContent className="p-6 text-center">
            <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Peer Support</h3>
            <p className="text-sm text-gray-600 mb-4">Talk to a trained peer volunteer</p>
            <Button variant="outline" className="w-full rounded-full">
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat Now
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  // Counselor Booking Component
  const CounselorBooking = () => (
    <div className="max-w-7xl mx-auto p-8 space-y-8">
      <div className="bg-gradient-to-r from-purple-50 via-violet-50 to-indigo-50 rounded-3xl p-8 border border-purple-100/50 shadow-lg">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full flex items-center justify-center">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
              Book Your Counseling Session
            </h1>
            <p className="text-gray-600 text-lg">Connect with qualified professionals for personalized support 💜</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card className="rounded-3xl border-0 shadow-xl bg-gradient-to-br from-white to-purple-50/30">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-2xl">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-600 rounded-lg flex items-center justify-center mr-3">
                  <UserCheck className="w-4 h-4 text-white" />
                </div>
                Available Counselors
              </CardTitle>
              <CardDescription className="text-base">Choose from our qualified mental health professionals</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {Array.from({ length: 3 }, (_, i) => (
                <Card key={i} className="rounded-2xl border-0 shadow-lg bg-gradient-to-r from-white to-purple-50/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <Avatar className="w-16 h-16 border-4 border-purple-200">
                            <AvatarFallback className="bg-gradient-to-r from-purple-500 to-violet-600 text-white font-semibold text-lg">
                              D{i + 1}
                            </AvatarFallback>
                          </Avatar>
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg text-gray-900">Dr. {['Sarah Wilson', 'Michael Chen', 'Emma Rodriguez'][i]}</h4>
                          <p className="text-sm text-gray-600 mb-2">Licensed Clinical Psychologist</p>
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, j) => (
                                <Star key={j} className="w-4 h-4 text-yellow-500 fill-current" />
                              ))}
                            </div>
                            <span className="text-sm font-medium">4.{8 + i} ({120 + i * 20} reviews)</span>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <Badge className="bg-green-100 text-green-700 rounded-full">Available Today</Badge>
                            <span>• {['Anxiety & Depression', 'Academic Stress', 'Relationship Issues'][i]}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right space-y-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button className="rounded-full bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-2">
                              <Calendar className="w-4 h-4 mr-2" />
                              Book Session
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-md">
                            <DialogHeader>
                              <DialogTitle>Book with Dr. {['Wilson', 'Chen', 'Rodriguez'][i]}</DialogTitle>
                              <DialogDescription>
                                Choose your preferred session type and time
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div>
                                <Label>Session Type</Label>
                                <Select>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select session type" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="individual">Individual Session (50 min)</SelectItem>
                                    <SelectItem value="group">Group Therapy (90 min)</SelectItem>
                                    <SelectItem value="crisis">Crisis Session (30 min)</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div>
                                <Label>Preferred Time</Label>
                                <Select>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select time slot" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="today-3pm">Today 3:00 PM</SelectItem>
                                    <SelectItem value="tomorrow-10am">Tomorrow 10:00 AM</SelectItem>
                                    <SelectItem value="tomorrow-2pm">Tomorrow 2:00 PM</SelectItem>
                                    <SelectItem value="friday-9am">Friday 9:00 AM</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div>
                                <Label>Brief Description (Optional)</Label>
                                <Textarea placeholder="Briefly describe what you'd like to discuss..." rows={3} />
                              </div>
                              <Button className="w-full rounded-full bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700">
                                Confirm Booking
                              </Button>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <p className="text-xs text-gray-500">Next available: Today 3:00 PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="rounded-3xl border-0 shadow-xl bg-gradient-to-br from-blue-50 to-indigo-100">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-blue-800">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                  <Settings className="w-4 h-4 text-white" />
                </div>
                Session Types
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Card className="rounded-2xl border-0 shadow-md bg-gradient-to-r from-blue-50 to-blue-100 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <h4 className="font-bold text-blue-800">Individual Session</h4>
                  </div>
                  <p className="text-sm text-blue-700 mb-2">50 minutes • One-on-one personalized care</p>
                  <Badge className="bg-blue-200 text-blue-800 rounded-full text-xs">Most Popular</Badge>
                </CardContent>
              </Card>
              
              <Card className="rounded-2xl border-0 shadow-md bg-gradient-to-r from-green-50 to-green-100 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <h4 className="font-bold text-green-800">Group Therapy</h4>
                  </div>
                  <p className="text-sm text-green-700 mb-2">90 minutes • Small supportive group setting</p>
                  <Badge className="bg-green-200 text-green-800 rounded-full text-xs">2-6 People</Badge>
                </CardContent>
              </Card>
              
              <Card className="rounded-2xl border-0 shadow-md bg-gradient-to-r from-red-50 to-red-100 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                      <AlertCircle className="w-4 h-4 text-white" />
                    </div>
                    <h4 className="font-bold text-red-800">Crisis Session</h4>
                  </div>
                  <p className="text-sm text-red-700 mb-2">30 minutes • Immediate emergency support</p>
                  <Badge className="bg-red-200 text-red-800 rounded-full text-xs">24/7 Available</Badge>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-0 shadow-xl bg-gradient-to-br from-purple-50 to-violet-100">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-purple-800">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-600 rounded-lg flex items-center justify-center mr-3">
                  <Calendar className="w-4 h-4 text-white" />
                </div>
                Your Appointments
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Card className="rounded-2xl border-0 shadow-md bg-gradient-to-r from-green-50 to-emerald-50">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-green-800">Today 3:00 PM</span>
                    <Badge className="bg-green-100 text-green-700 rounded-full">Confirmed</Badge>
                  </div>
                  <p className="text-sm text-green-700">Dr. Wilson - Individual Session</p>
                  <p className="text-xs text-green-600 mt-1">Room: Virtual Session #1</p>
                </CardContent>
              </Card>
              
              <Card className="rounded-2xl border-0 shadow-md bg-gradient-to-r from-blue-50 to-indigo-50">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-blue-800">Friday 10:00 AM</span>
                    <Badge className="bg-blue-100 text-blue-700 rounded-full">Upcoming</Badge>
                  </div>
                  <p className="text-sm text-blue-700">Dr. Chen - Group Therapy</p>
                  <p className="text-xs text-blue-600 mt-1">Room: Conference Room B</p>
                </CardContent>
              </Card>
              
              <Button variant="outline" className="w-full rounded-full border-purple-300 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300">
                <Eye className="w-4 h-4 mr-2" />
                View All Appointments
              </Button>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-0 shadow-xl bg-gradient-to-br from-orange-50 to-amber-100">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center text-orange-800">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-600 rounded-lg flex items-center justify-center mr-3">
                  <HelpCircle className="w-4 h-4 text-white" />
                </div>
                Need Help?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-orange-700">Not sure which session type is right for you?</p>
              <Button variant="outline" className="w-full rounded-full border-orange-300 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300">
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat with AI Assistant
              </Button>
              <Button variant="outline" className="w-full rounded-full border-orange-300 text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300">
                <Phone className="w-4 h-4 mr-2" />
                Call Support: 1-800-SAKHA
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );