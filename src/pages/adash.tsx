  // Admin Dashboard Components
  const AdminNavigation = () => (
    <nav className="bg-white/95 backdrop-blur-md border-b border-red-100/50 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-12">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Shield className="h-9 w-9 text-red-600" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-red-400 to-orange-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">SAKHA</span>
                <div className="text-xs text-red-600 font-medium">Admin</div>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-1">
              <Button
                variant={currentView === 'analytics' ? 'default' : 'ghost'}
                onClick={() => setCurrentView('analytics')}
                className={`rounded-full px-4 py-2 font-medium transition-all duration-300 text-sm ${
                  currentView === 'analytics' 
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg' 
                    : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                }`}
              >
                <BarChart3 className="w-4 h-4 mr-1" />
                Analytics
              </Button>
              <Button
                variant={currentView === 'students' ? 'default' : 'ghost'}
                onClick={() => setCurrentView('students')}
                className={`rounded-full px-4 py-2 font-medium transition-all duration-300 text-sm ${
                  currentView === 'students' 
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg' 
                    : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                }`}
              >
                <GraduationCap className="w-4 h-4 mr-1" />
                Students
              </Button>
              <Button
                variant={currentView === 'counsellors' ? 'default' : 'ghost'}
                onClick={() => setCurrentView('counsellors')}
                className={`rounded-full px-4 py-2 font-medium transition-all duration-300 text-sm ${
                  currentView === 'counsellors' 
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg' 
                    : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                }`}
              >
                <UserCheck className="w-4 h-4 mr-1" />
                Counsellors
              </Button>
              <Button
                variant={currentView === 'volunteers' ? 'default' : 'ghost'}
                onClick={() => setCurrentView('volunteers')}
                className={`rounded-full px-4 py-2 font-medium transition-all duration-300 text-sm ${
                  currentView === 'volunteers' 
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg' 
                    : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                }`}
              >
                <Users className="w-4 h-4 mr-1" />
                Volunteers
              </Button>
              <Button
                variant={currentView === 'moderation' ? 'default' : 'ghost'}
                onClick={() => setCurrentView('moderation')}
                className={`rounded-full px-4 py-2 font-medium transition-all duration-300 text-sm ${
                  currentView === 'moderation' 
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg' 
                    : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                }`}
              >
                <Flag className="w-4 h-4 mr-1" />
                Moderation
              </Button>
              <Button
                variant={currentView === 'system' ? 'default' : 'ghost'}
                onClick={() => setCurrentView('system')}
                className={`rounded-full px-4 py-2 font-medium transition-all duration-300 text-sm ${
                  currentView === 'system' 
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-lg' 
                    : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                }`}
              >
                <Settings className="w-4 h-4 mr-1" />
                System
              </Button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Bell className="w-6 h-6 text-gray-500 hover:text-red-600 cursor-pointer transition-colors" />
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

  const AdminAnalytics = () => (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Analytics & Reporting</h1>
        <Button className="rounded-full">
          <Download className="w-4 h-4 mr-2" />
          Export Reports
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="rounded-xl border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="text-2xl font-semibold text-blue-600">1,247</div>
            <div className="text-sm text-gray-600">Active Students</div>
            <div className="text-xs text-green-600 mt-1">↗ +12% this month</div>
          </CardContent>
        </Card>
        <Card className="rounded-xl border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="text-2xl font-semibold text-green-600">89%</div>
            <div className="text-sm text-gray-600">Engagement Rate</div>
            <div className="text-xs text-green-600 mt-1">↗ +5% this month</div>
          </CardContent>
        </Card>
        <Card className="rounded-xl border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="text-2xl font-semibold text-purple-600">45</div>
            <div className="text-sm text-gray-600">Active Volunteers</div>
            <div className="text-xs text-green-600 mt-1">↗ +3 this month</div>
          </CardContent>
        </Card>
        <Card className="rounded-xl border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="text-2xl font-semibold text-orange-600">4.8/5</div>
            <div className="text-sm text-gray-600">Satisfaction Score</div>
            <div className="text-xs text-green-600 mt-1">↗ +0.2 this month</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="rounded-xl border-0 shadow-sm">
          <CardHeader>
            <CardTitle>User Engagement Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between h-48 bg-gray-50 rounded-lg p-4">
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month, index) => (
                <div key={month} className="flex flex-col items-center">
                  <div 
                    className="w-8 bg-gradient-to-t from-blue-500 to-purple-500 rounded-t mb-2" 
                    style={{ height: `${(index + 1) * 20 + 40}px` }}
                  />
                  <span className="text-xs text-gray-600">{month}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Wellness Metrics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Average Mood Score</span>
                  <span>4.2/5</span>
                </div>
                <Progress value={84} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Resource Engagement</span>
                  <span>76%</span>
                </div>
                <Progress value={76} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Peer Support Usage</span>
                  <span>68%</span>
                </div>
                <Progress value={68} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const AdminVolunteers = () => (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Volunteer Program Management</h1>

      <Tabs defaultValue="active" className="space-y-6">
        <TabsList>
          <TabsTrigger value="active">Active Volunteers</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="training">Training</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }, (_, i) => (
              <Card key={i} className="rounded-xl border-0 shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Avatar>
                      <AvatarFallback>V{i + 1}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">Volunteer {i + 1}</h3>
                      <p className="text-sm text-gray-600">Active since Mar 2024</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Hours This Month:</span>
                      <span>{15 + i * 3}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Students Helped:</span>
                      <span>{8 + i * 2}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rating:</span>
                      <span>4.{8 + i}/5</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="applications" className="space-y-4">
          <Card className="rounded-xl border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Pending Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Array.from({ length: 3 }, (_, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">Applicant {i + 1}</h4>
                      <p className="text-sm text-gray-600">Applied 2 days ago</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4 mr-1" />
                        Review
                      </Button>
                      <Button size="sm">Approve</Button>
                      <Button size="sm" variant="destructive">Reject</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="training" className="space-y-4">
          <Card className="rounded-xl border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Training Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Array.from({ length: 4 }, (_, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">Trainee {i + 1}</h4>
                      <div className="flex items-center space-x-2 mt-1">
                        <Progress value={(i + 1) * 25} className="w-32 h-2" />
                        <span className="text-sm text-gray-600">{(i + 1) * 25}%</span>
                      </div>
                    </div>
                    <Badge variant={i === 3 ? 'default' : 'secondary'}>
                      {i === 3 ? 'Complete' : 'In Progress'}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );

  const AdminModeration = () => (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Content Moderation</h1>

      <Card className="rounded-xl border-0 shadow-sm">
        <CardHeader>
          <CardTitle>Flagged Content</CardTitle>
          <CardDescription>Posts and comments requiring review</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Array.from({ length: 3 }, (_, i) => (
              <div key={i} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Badge variant="destructive">Flagged</Badge>
                    <span className="text-sm text-gray-600">c/ExamStress • by QuietRiver</span>
                  </div>
                  <span className="text-sm text-gray-500">2 hours ago</span>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Post Title {i + 1}</h4>
                  <p className="text-sm text-gray-700">Post content that has been flagged for review...</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="outline">
                    <Eye className="w-4 h-4 mr-1" />
                    View Full Content
                  </Button>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    Keep
                  </Button>
                  <Button size="sm" variant="destructive">
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="rounded-xl border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Moderation Stats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm">Posts Reviewed Today</span>
              <span className="font-medium">24</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Action Required</span>
              <span className="font-medium text-orange-600">8</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">False Positives</span>
              <span className="font-medium">2</span>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Resource Queue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Pending Approval</span>
                <Badge variant="secondary">12</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Under Review</span>
                <Badge variant="secondary">5</Badge>
              </div>
              <Button size="sm" className="w-full">Review Resources</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  // Admin Students Management
  const AdminStudents = () => (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Student Management</h1>
        <Button className="rounded-full">
          <Download className="w-4 h-4 mr-2" />
          Export Data
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card className="rounded-xl border-0 shadow-sm">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-semibold text-blue-600">1,247</div>
            <div className="text-sm text-gray-600">Total Students</div>
          </CardContent>
        </Card>
        <Card className="rounded-xl border-0 shadow-sm">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-semibold text-green-600">1,089</div>
            <div className="text-sm text-gray-600">Active This Month</div>
          </CardContent>
        </Card>
        <Card className="rounded-xl border-0 shadow-sm">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-semibold text-orange-600">23</div>
            <div className="text-sm text-gray-600">Flagged Accounts</div>
          </CardContent>
        </Card>
        <Card className="rounded-xl border-0 shadow-sm">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-semibold text-purple-600">4.2</div>
            <div className="text-sm text-gray-600">Avg Wellbeing Score</div>
          </CardContent>
        </Card>
      </div>

      <Card className="rounded-xl border-0 shadow-sm">
        <CardHeader>
          <CardTitle>Student Directory</CardTitle>
          <div className="flex gap-2">
            <Input placeholder="Search students..." className="w-64" />
            <Select>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
                <SelectItem value="flagged">Flagged</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Array.from({ length: 5 }, (_, i) => (
              <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback>S{i + 1}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">Student {i + 1}</h4>
                    <p className="text-sm text-gray-600">student{i + 1}@university.edu</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant={i % 3 === 0 ? 'default' : 'secondary'}>
                        {i % 3 === 0 ? 'Active' : 'Inactive'}
                      </Badge>
                      <span className="text-xs text-gray-500">Last login: {i + 1} days ago</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Eye className="w-4 h-4 mr-1" />
                    View
                  </Button>
                  <Button size="sm" variant="outline">
                    <Edit className="w-4 h-4 mr-1" />
                    Edit
                  </Button>
                  <Button size="sm" variant="outline">
                    {i % 3 === 0 ? <Lock className="w-4 h-4" /> : <Unlock className="w-4 h-4" />}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  // Admin Counsellors Management
  const AdminCounsellors = () => (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Counsellor Management</h1>
        <Button className="rounded-full">
          <UserPlus className="w-4 h-4 mr-2" />
          Add Counsellor
        </Button>
      </div>

      <Tabs defaultValue="active" className="space-y-6">
        <TabsList>
          <TabsTrigger value="active">Active Counsellors</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="verification">Verification</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }, (_, i) => (
              <Card key={i} className="rounded-xl border-0 shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Avatar>
                      <AvatarFallback>Dr{i + 1}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">Dr. Smith {i + 1}</h3>
                      <p className="text-sm text-gray-600">Licensed Clinical Psychologist</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">License:</span>
                      <span>Verified ✓</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sessions This Month:</span>
                      <span>{20 + i * 5}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rating:</span>
                      <span>4.{8 + i}/5</span>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Edit className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="applications" className="space-y-4">
          <Card className="rounded-xl border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Pending Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Array.from({ length: 3 }, (_, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">Dr. Johnson {i + 1}</h4>
                      <p className="text-sm text-gray-600">Clinical Psychology, PhD</p>
                      <p className="text-sm text-gray-500">Applied 3 days ago</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4 mr-1" />
                        Review
                      </Button>
                      <Button size="sm">Approve</Button>
                      <Button size="sm" variant="destructive">Reject</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="verification" className="space-y-4">
          <Card className="rounded-xl border-0 shadow-sm">
            <CardHeader>
              <CardTitle>License Verification</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Array.from({ length: 2 }, (_, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">Dr. Wilson {i + 1}</h4>
                      <p className="text-sm text-gray-600">License verification pending</p>
                      <p className="text-sm text-gray-500">Submitted documents 1 day ago</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <FileText className="w-4 h-4 mr-1" />
                        View Documents
                      </Button>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        Verify
                      </Button>
                      <Button size="sm" variant="destructive">
                        Reject
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );

  // Enhanced Admin System Configuration
  const AdminSystem = () => (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-semibold">System Configuration</h1>

      <Tabs defaultValue="announcements" className="space-y-6">
        <TabsList>
          <TabsTrigger value="announcements">Announcements</TabsTrigger>
          <TabsTrigger value="settings">Platform Settings</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="backup">Backup & Security</TabsTrigger>
        </TabsList>

        <TabsContent value="announcements" className="space-y-4">
          <Card className="rounded-xl border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Create System Announcement</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Announcement Title</Label>
                <Input placeholder="Enter announcement title" />
              </div>
              <div>
                <Label>Message</Label>
                <Textarea placeholder="Create a system-wide announcement..." rows={4} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Target Audience</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select audience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Users</SelectItem>
                      <SelectItem value="students">Students Only</SelectItem>
                      <SelectItem value="counsellors">Counsellors Only</SelectItem>
                      <SelectItem value="volunteers">Volunteers Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Priority Level</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="urgent">Urgent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button className="w-full rounded-full">
                <Bell className="w-4 h-4 mr-2" />
                Publish Announcement
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="rounded-xl border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Platform Configuration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Maintenance Mode</Label>
                    <p className="text-sm text-gray-600">Put platform in maintenance mode</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>New User Registration</Label>
                    <p className="text-sm text-gray-600">Allow new user signups</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Anonymous Posting</Label>
                    <p className="text-sm text-gray-600">Allow anonymous forum posts</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-xl border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Content Moderation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Auto-Moderation</Label>
                    <p className="text-sm text-gray-600">Enable automatic content filtering</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Crisis Detection</Label>
                    <p className="text-sm text-gray-600">AI-powered crisis content detection</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="rounded-xl border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Third-Party Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <Label>Email Service</Label>
                      <p className="text-sm text-gray-600">SendGrid Integration</p>
                    </div>
                  </div>
                  <Badge>Connected</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-green-600" />
                    <div>
                      <Label>SMS Service</Label>
                      <p className="text-sm text-gray-600">Twilio Integration</p>
                    </div>
                  </div>
                  <Badge variant="secondary">Disconnected</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-xl border-0 shadow-sm">
              <CardHeader>
                <CardTitle>API Configuration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>API Rate Limiting</Label>
                  <Input placeholder="1000 requests/hour" />
                </div>
                <div>
                  <Label>Webhook URL</Label>
                  <Input placeholder="https://api.sakha.edu/webhooks" />
                </div>
                <Button variant="outline" className="w-full">
                  <Zap className="w-4 h-4 mr-2" />
                  Test API Connection
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="backup" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="rounded-xl border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Data Backup</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Automatic Backups</Label>
                    <p className="text-sm text-gray-600">Daily automated backups</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div>
                  <Label>Last Backup</Label>
                  <p className="text-sm text-gray-600">Today at 3:00 AM</p>
                </div>
                <Button variant="outline" className="w-full">
                  <Database className="w-4 h-4 mr-2" />
                  Create Manual Backup
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-xl border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Two-Factor Auth</Label>
                    <p className="text-sm text-gray-600">Require 2FA for admin accounts</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Session Timeout</Label>
                    <p className="text-sm text-gray-600">Auto-logout after inactivity</p>
                  </div>
                  <Input className="w-20" placeholder="30" />
                </div>
                <Button variant="outline" className="w-full">
                  <Shield className="w-4 h-4 mr-2" />
                  Security Audit
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );