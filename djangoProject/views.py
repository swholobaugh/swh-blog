from inertia import inertia

@inertia('Home/Index')
def index(request):
    return {}

@inertia('About/Index')
def about(request):
    return {}

@inertia('Blog/Index')
def blog(request):
    return {}