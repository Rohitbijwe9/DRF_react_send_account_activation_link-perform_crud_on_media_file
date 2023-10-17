from typing import Any
from django.db import models
from django.contrib.auth.models import AbstractUser
from .models import *


class User(AbstractUser):
    email=models.EmailField(unique=True)
    phone_number=models.CharField(max_length=12,null=True,blank=True)
    username=models.CharField(max_length=20,unique=True)
    gender=models.CharField(max_length=20,null=True,blank=True)
    address=models.CharField(max_length=100,null=True,blank=True)

    



       


