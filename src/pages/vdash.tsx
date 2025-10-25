  // Peer Volunteer Components
  const VolunteerNavigation = () => (
    <nav className="bg-white/95 backdrop-blur-md border-b border-purple-100/50 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-12">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Heart className="h-9 w-9 text-purple-600" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">SAKHA</span>
                <div className="text-xs text-purple-600 font-medium">Volunteer</div>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-2">
              <Button
                variant={currentView === 'chat' ? 'default' : 'ghost'}
                onClick={() => setCurrentView('chat')}
                className={`rounded-full px-6 py-2 font-medium transition-all duration-300 ${
                  currentView === 'chat' 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' 
                    : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat
              </Button>
              <Button
                variant={currentView === 'volunteerForum' ? 'default' : 'ghost'}
                onClick={() => setCurrentView('volunteerForum')}
                className={`rounded-full px-6 py-2 font-medium transition-all duration-300 ${
                  currentView === 'volunteerForum' 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' 
                    : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                <Users className="w-4 h-4 mr-2" />
                Forum
              </Button>
              <Button
                variant={currentView === 'shifts' ? 'default' : 'ghost'}
                onClick={() => setCurrentView('shifts')}
                className={`rounded-full px-6 py-2 font-medium transition-all duration-300 ${
                  currentView === 'shifts' 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' 
                    : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                <Clock className="w-4 h-4 mr-2" />
                Shifts
              </Button>
              <Button
                variant={currentView === 'training' ? 'default' : 'ghost'}
                onClick={() => setCurrentView('training')}
                className={`rounded-full px-6 py-2 font-medium transition-all duration-300 ${
                  currentView === 'training' 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' 
                    : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Training
              </Button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Bell className="w-6 h-6 text-gray-500 hover:text-purple-600 cursor-pointer transition-colors" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleLogout}
              className="rounded-full text-gray-600 hover:text-red-600 hover:bg-red-50 p-2"
            >
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );

  const VolunteerChat = () => (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <Card className="rounded-xl border-0 shadow-sm h-96">
            <CardHeader className="border-b">
              <div className="flex items-center justify-between">
                <CardTitle>Peer Support Chat</CardTitle>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">Available</span>
                    <Switch checked={isAvailable} onCheckedChange={setIsAvailable} />
                  </div>
                  <Button size="sm" variant="outline" className="rounded-full">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    Escalate to Counsellor
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col h-full p-0">
              <ScrollArea className="flex-1 p-4">
                {isAvailable ? (
                  <div className="space-y-4">
                    <div className="flex justify-start">
                      <div className="bg-gray-100 rounded-lg p-3 max-w-xs">
                        <p className="text-sm">Hi, I'm feeling really anxious about my upcoming presentation...</p>
                        <span className="text-xs text-gray-500">Anonymous Student • 2:45 PM</span>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-purple-500 text-white rounded-lg p-3 max-w-xs">
                        <p className="text-sm">That sounds really challenging. It's completely normal to feel anxious about presentations. What specifically is worrying you most?</p>
                        <span className="text-xs text-purple-100">You • 2:47 PM</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-500">
                    <div className="text-center">
                      <MessageCircle className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                      <p>Turn on availability to start helping</p>
                    </div>
                  </div>
                )}
              </ScrollArea>
              {isAvailable && (
                <div className="border-t p-4">
                  <div className="flex space-x-2">
                    <Input placeholder="Type a supportive message..." className="flex-1" />
                    <Button size="sm" className="rounded-full">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="rounded-xl border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">Quick Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <FileText className="w-4 h-4 mr-2" />
                Breathing Exercises
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <Heart className="w-4 h-4 mr-2" />
                Anxiety Management
              </Button>
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <Users className="w-4 h-4 mr-2" />
                Social Skills Tips
              </Button>
            </CardContent>
          </Card>

          <Card className="rounded-xl border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-gray-600">
              <p>• Listen without judgment</p>
              <p>• Provide emotional support</p>
              <p>• Never give medical advice</p>
              <p>• Escalate if needed</p>
              <p>• Maintain confidentiality</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  const VolunteerShifts = () => (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Volunteer Shifts</h1>

      <Card className="rounded-xl border-0 shadow-sm">
        <CardHeader>
          <CardTitle>Available Listener Shifts</CardTitle>
          <CardDescription>2-hour shifts available for sign-up</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-2 mb-4">
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
              <div key={day} className="text-center font-medium text-sm p-2">{day}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 21 }, (_, i) => (
              <div key={i} className="space-y-2">
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="w-full h-16 flex flex-col items-center justify-center"
                >
                  <span className="text-xs">10-12 PM</span>
                  <span className="text-xs text-gray-500">Available</span>
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="w-full h-16 flex flex-col items-center justify-center"
                >
                  <span className="text-xs">8-10 PM</span>
                  <span className="text-xs text-gray-500">Available</span>
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="rounded-xl border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Your Upcoming Shifts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <div>
                <p className="font-medium text-sm">Tonight 8-10 PM</p>
                <p className="text-xs text-gray-600">Listener Shift</p>
              </div>
              <Badge>Confirmed</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div>
                <p className="font-medium text-sm">Tomorrow 2-4 PM</p>
                <p className="text-xs text-gray-600">Listener Shift</p>
              </div>
              <Badge variant="outline">Pending</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl border-0 shadow-sm">
          <CardHeader>
            <CardTitle>This Month</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm">Hours Volunteered</span>
              <span className="font-medium">18 hours</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Students Helped</span>
              <span className="font-medium">12</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Completion Rate</span>
              <span className="font-medium">98%</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  // Volunteer Forum Access (similar to student forum but with moderation tools)
  const VolunteerForum = () => (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3 space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold">Peer Forum - Volunteer View</h1>
            <div className="flex gap-2">
              <Badge variant="outline" className="bg-purple-50">
                <Shield className="w-3 h-3 mr-1" />
                Volunteer Access
              </Badge>
            </div>
          </div>

          <div className="space-y-4">
            {mockPosts.map((post) => (
              <Card 
                key={post.id} 
                className="rounded-xl border-0 shadow-sm hover:shadow-md transition-shadow"
              >
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex flex-col items-center space-y-1">
                      <Button 
                        size="sm" 
                        variant="ghost"
                        className="p-1 h-8 w-8 rounded"
                      >
                        <TrendingUp className="w-4 h-4" />
                      </Button>
                      <span className="text-sm font-medium">{post.upvotes - post.downvotes}</span>
                      <Button 
                        size="sm" 
                        variant="ghost"
                        className="p-1 h-8 w-8 rounded"
                      >
                        <TrendingDown className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                        <Badge variant="outline" className="rounded-full">
                          {post.circle}
                        </Badge>
                        <span>•</span>
                        <span>by {post.author}</span>
                        <span>•</span>
                        <span>{post.timestamp}</span>
                      </div>
                      <h3 className="font-medium mb-2">{post.title}</h3>
                      <p className="text-gray-700 text-sm mb-3">{post.content}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <Button variant="ghost" size="sm" className="p-0 h-auto">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          {post.comments} comments
                        </Button>
                        <Button variant="ghost" size="sm" className="p-0 h-auto text-purple-600">
                          <Heart className="w-4 h-4 mr-1" />
                          Offer Support
                        </Button>
                        <Button variant="ghost" size="sm" className="p-0 h-auto text-orange-600">
                          <Flag className="w-4 h-4 mr-1" />
                          Flag
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
          <Card className="rounded-xl border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">Volunteer Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-gray-600">
              <p>• Monitor for crisis situations</p>
              <p>• Provide supportive responses</p>
              <p>• Flag concerning content</p>
              <p>• Escalate when necessary</p>
              <p>• Maintain professional boundaries</p>
            </CardContent>
          </Card>

          <Card className="rounded-xl border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" size="sm" className="w-full justify-start">
                <AlertCircle className="w-4 h-4 mr-2" />
                Report Crisis
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <MessageCircle className="w-4 h-4 mr-2" />
                Start Private Chat
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );