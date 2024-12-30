from django.db import models

class Transaction(models.Model):
    name = models.CharField(max_length=100)
    amount = models.FloatField()

    def __str__(self):
        return f"{self.name}: ${self.amount}"
