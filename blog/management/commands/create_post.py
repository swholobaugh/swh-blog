import os
from django.core.management.base import BaseCommand
from django.utils import timezone
from blog.models import Post


class Command(BaseCommand):
    help = 'Create a new Post and a corresponding directory with a .MD file'

    def add_arguments(self, parser):
        parser.add_argument('file_name', type=str, help='The file name for the new Post')

    def handle(self, *args, **options):
        file_name = options['file_name']
        if not file_name.endswith('.md'):
            file_name += '.md'

        new_post = Post.objects.create(file_name=file_name, created_date=timezone.now())
        new_post.save()

        directory_path = os.path.join('blog', 'media', 'posts', str(new_post.meta_universalid))
        os.makedirs(directory_path, exist_ok=True)

        file_path = os.path.join(directory_path, file_name)
        with open(file_path, 'w') as f:
            f.write('# New Post\n')

        self.stdout.write(self.style.SUCCESS(f'Successfully created Post with file {file_name} and corresponding directory'))
