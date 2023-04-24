from inertia import inertia


@inertia('Home/Index')
def index(request):
    return {}


@inertia('About/Index')
def about(request):
    return {'name': 'Seth'}


@inertia('Blog/Index')
def blog(request):
    return {}


@inertia('Blog/posts/Post')
def post(request):
    return {}
