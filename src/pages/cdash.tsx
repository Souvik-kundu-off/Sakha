  // Counsellor Dashboard Components
  const CounsellorNavigation = () => (
    <nav className="bg-white/95 backdrop-blur-md border-b border-blue-100/50 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-12">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Heart className="h-9 w-9 text-blue-600" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SAKHA</span>
                <div className="text-xs text-blue-600 font-medium">Professional</div>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-2">
              <Button
                variant={currentView === 'dashboard' ? 'default' : 'ghost'}
                onClick={() => setCurrentView('dashboard')}
                className={`rounded-full px-6 py-2 font-medium transition-all duration-300 ${
                  currentView === 'dashboard' 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <Home className="w-4 h-4 mr-2" />
                Dashboard
              </Button>
              <Button
                variant={currentView === 'schedule' ? 'default' : 'ghost'}
                onClick={() => setCurrentView('schedule')}
                className={`rounded-full px-6 py-2 font-medium transition-all duration-300 ${
                  currentView === 'schedule' 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Schedule
              </Button>
              <Button
                variant={currentView === 'caseload' ? 'default' : 'ghost'}
                onClick={() => setCurrentView('caseload')}
                className={`rounded-full px-6 py-2 font-medium transition-all duration-300 ${
                  currentView === 'caseload' 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <Users className="w-4 h-4 mr-2" />
                Caseload
              </Button>
              <Button
                variant={currentView === 'counsellorResources' ? 'default' : 'ghost'}
                onClick={() => setCurrentView('counsellorResources')}
                className={`rounded-full px-6 py-2 font-medium transition-all duration-300 ${
                  currentView === 'counsellorResources' 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Resources
              </Button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Bell className="w-6 h-6 text-gray-500 hover:text-blue-600 cursor-pointer transition-colors" />
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

  const CounsellorDashboard = () => (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Good morning, Dr. Smith
        </h1>
        <p className="text-gray-600">You have 3 appointments scheduled for today</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="rounded-xl border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center text-blue-800">
              <Calendar className="w-5 h-5 mr-2" />
              Today's Schedule
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {mockAppointments.map((apt) => (
              <div key={apt.id} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div>
                  <p className="font-medium text-sm">{apt.time}</p>
                  <p className="text-xs text-gray-600">{apt.student}</p>
                </div>
                <Badge variant={apt.status === 'confirmed' ? 'default' : 'secondary'}>
                  {apt.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="rounded-xl border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center text-green-800">
              <Users className="w-5 h-5 mr-2" />
              Caseload Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="text-center">
                <div className="text-2xl font-semibold text-green-600">12</div>
                <div className="text-sm text-gray-600">Active Students</div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-lg font-medium text-orange-600">3</div>
                  <div className="text-xs text-gray-600">High Priority</div>
                </div>
                <div>
                  <div className="text-lg font-medium text-blue-600">8</div>
                  <div className="text-xs text-gray-600">Pending Notes</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center text-purple-800">
              <BarChart3 className="w-5 h-5 mr-2" />
              This Week
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Sessions Completed</span>
                <span className="font-medium">18/20</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">New Consultations</span>
                <span className="font-medium">4</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Resources Shared</span>
                <span className="font-medium">12</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="rounded-xl border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <div>
                  <p className="text-sm font-medium">Session completed with A.S.</p>
                  <p className="text-xs text-gray-600">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <Upload className="w-4 h-4 text-blue-600" />
                <div>
                  <p className="text-sm font-medium">Resource uploaded for M.K.</p>
                  <p className="text-xs text-gray-600">4 hours ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start rounded-full">
              <Plus className="w-4 h-4 mr-2" />
              Schedule New Appointment
            </Button>
            <Button variant="outline" className="w-full justify-start rounded-full">
              <FileText className="w-4 h-4 mr-2" />
              Create Session Notes
            </Button>
            <Button variant="outline" className="w-full justify-start rounded-full">
              <Upload className="w-4 h-4 mr-2" />
              Share Resource with Student
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const CounsellorSchedule = () => (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Schedule & Availability</h1>
        <Button className="rounded-full">
          <Plus className="w-4 h-4 mr-2" />
          Block Time
        </Button>
      </div>

      <Card className="rounded-xl border-0 shadow-sm">
        <CardHeader>
          <CardTitle>Weekly Schedule</CardTitle>
          <CardDescription>Click and drag to set your availability</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-8 gap-2">
            <div></div>
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
              <div key={day} className="text-center font-medium text-sm p-2">{day}</div>
            ))}
            {Array.from({ length: 10 }, (_, hour) => (
              <React.Fragment key={hour}>
                <div className="text-sm text-gray-600 p-2">{9 + hour}:00</div>
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                  <div 
                    key={`${day}-${hour}`} 
                    className="h-12 border border-gray-200 rounded cursor-pointer hover:bg-blue-50 flex items-center justify-center"
                  >
                    {(day === 'Mon' && hour === 1) && (
                      <div className="bg-blue-500 text-white text-xs p-1 rounded w-full text-center">
                        A.S.
                      </div>
                    )}
                    {(day === 'Wed' && hour === 3) && (
                      <div className="bg-green-500 text-white text-xs p-1 rounded w-full text-center">
                        M.K.
                      </div>
                    )}
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const CounsellorCaseload = () => (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Student Caseload</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCaseload.map((student) => (
          <Card key={student.id} className="rounded-xl border-0 shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarFallback>{student.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{student.initials}</h3>
                    <p className="text-sm text-gray-600">Student ID: {student.id}</p>
                  </div>
                </div>
                <Badge variant={student.priority === 'high' ? 'destructive' : 'secondary'}>
                  {student.priority}
                </Badge>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Last Session:</span>
                  <span>{student.lastSession}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Next Session:</span>
                  <span>{student.nextSession}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Session Notes:</span>
                  <span>{student.notes}</span>
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm" variant="outline" className="flex-1">
                      <FileText className="w-4 h-4 mr-1" />
                      Notes
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Session Notes - {student.initials}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <Textarea placeholder="Add session notes..." rows={6} />
                      <div className="flex justify-between">
                        <Button variant="outline">Save Draft</Button>
                        <Button>Save & Complete</Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                <Button size="sm" variant="outline" className="flex-1">
                  <Upload className="w-4 h-4 mr-1" />
                  Share
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  // Counsellor Resources Component  
  const CounsellorResources = () => (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Resource Management</h1>

      <Tabs defaultValue="library" className="space-y-6">
        <TabsList>
          <TabsTrigger value="library">Resource Library</TabsTrigger>
          <TabsTrigger value="contribute">Contribute Resource</TabsTrigger>
          <TabsTrigger value="submissions">My Submissions</TabsTrigger>
        </TabsList>

        <TabsContent value="library" className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input placeholder="Search resources..." className="pl-10 w-64" />
              </div>
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="academic">Academic Stress</SelectItem>
                  <SelectItem value="anxiety">Anxiety Management</SelectItem>
                  <SelectItem value="depression">Depression Support</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockResources.map((resource) => (
              <Card key={resource.id} className="rounded-xl border-0 shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline" className="rounded-full">
                      {resource.type}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm">{resource.rating}</span>
                    </div>
                  </div>
                  <h3 className="font-medium mb-2">{resource.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{resource.description}</p>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 rounded-full">
                      <Upload className="w-4 h-4 mr-1" />
                      Share with Student
                    </Button>
                    <Button size="sm" variant="outline" className="rounded-full">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="contribute" className="space-y-4">
          <Card className="rounded-xl border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Submit New Resource</CardTitle>
              <CardDescription>Share valuable resources with the community</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Resource Title</Label>
                  <Input placeholder="Enter resource title" />
                </div>
                <div>
                  <Label>Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="academic">Academic Stress</SelectItem>
                      <SelectItem value="anxiety">Anxiety Management</SelectItem>
                      <SelectItem value="depression">Depression Support</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label>Description</Label>
                <Textarea placeholder="Describe the resource and its benefits..." rows={4} />
              </div>
              <div>
                <Label>Resource File or URL</Label>
                <Input placeholder="Upload file or enter URL" />
              </div>
              <Button className="w-full rounded-full">
                <Upload className="w-4 h-4 mr-2" />
                Submit Resource
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="submissions" className="space-y-4">
          <div className="space-y-4">
            {Array.from({ length: 3 }, (_, i) => (
              <Card key={i} className="rounded-xl border-0 shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Mindfulness Techniques Guide</h4>
                      <p className="text-sm text-gray-600">Submitted 2 days ago</p>
                    </div>
                    <Badge variant={i === 0 ? 'default' : i === 1 ? 'secondary' : 'destructive'}>
                      {i === 0 ? 'Approved' : i === 1 ? 'Pending' : 'Needs Revision'}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );