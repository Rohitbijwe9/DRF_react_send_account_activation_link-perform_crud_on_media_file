from django.db import models

from django.db import models

class Employee(models.Model):
    eid=models.IntegerField()
    ename=models.CharField(max_length=20)
    phone=models.BigIntegerField()
    mail=models.EmailField()
    add=models.CharField(max_length=50)
    photo=models.ImageField(upload_to='image',null=True)
