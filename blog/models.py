import uuid
from django.db import models


class Post(models.Model):
    meta_universalid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    file_name = models.CharField(max_length=150)
    created_date = models.DateField(auto_created=True)

