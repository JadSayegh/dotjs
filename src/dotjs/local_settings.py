import os
from .settings import BASE_DIR


# Added Django frameword settings
APPEND_SLASH = True

MEDIA_URL = "/media/"

MEDIA_ROOT = os.path.join(BASE_DIR, "media")


STATICFILES_DIRS = [
    os.path.join(BASE_DIR, "static"),
]

# Added for django-allauth
AUTHENTICATION_BACKENDS = (
    # Needed to login by username in Django admin, regardless of `allauth`
    'django.contrib.auth.backends.ModelBackend',

    # `allauth` specific authentication methods, such as login by e-mail
    'allauth.account.auth_backends.AuthenticationBackend',
)




# https://docs.djangoproject.com/en/1.9/ref/contrib/sites/
# Added with django-allauth
SITE_ID = 1

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'

# Added for email support with sendgrid #todo: will only matter with real SMTP host
EMAIL_HOST =  'localhost' #'smtp.sendgrid.com'
EMAIL_HOST_USER = 'dotjs-team' #
EMAIL_MAIN = ""
EMAIL_HOST_PASSWORD = ''
EMAIL_PORT = 587
EMAIL_USE_TLS = True # Secure connection

# '''
# from django.conf import settings
# from django.core.mail import send_mail

# send_mail(
# "subject",
#  "here is the message",
#   settings.EMAIL_MAIN,
# ["hello@tutyteam.com"],
#  fail_silently=False)

# '''

ACCOUNT_AUTHENTICATION_METHOD = 'email'
ACCOUNT_EMAIL_REQUIRED = True
ACCOUNT_UNIQUE_EMAIL = True
ACCOUNT_EMAIL_CONFIRMATION_EXPIRES = 7 # 1 week
ACCOUNT_EMAIL_VERIFICATION = "mandatory"
SOCIALACCOUNT_EMAIL_REQUIRED = ACCOUNT_EMAIL_REQUIRED



# http://localhost:8000/accounts/facebook/login/callback
SOCIALACCOUNT_PROVIDERS = \
    {'facebook':
       {'METHOD': "js_sdk",#'oauth2',
        'SCOPE': ['email', 'public_profile', 'user_friends'],
        'AUTH_PARAMS': {'auth_type': 'https'},
        'FIELDS': [
            'id',
            'email',
            'name',
            'first_name',
            'last_name',
            'verified',
            'locale',
            'friends',
            'timezone',
            'link',
            'gender',
            'updated_time'],
        'EXCHANGE_TOKEN': True,
        'LOCALE_FUNC': lambda request: 'en_US', #todo change this to a more generic local function
        'VERIFIED_EMAIL': False, #facebook 'verified' might be with email or phone. Facebook has not clarified.
        'VERSION': 'v2.4'}}




# ================ Django Rest FrameWork =============
REST_FRAMEWORK = {
    # Use Django's standard `django.contrib.auth` permissions,
    # or allow read-only access for unauthenticated users.
    'DEFAULT_PERMISSION_CLASSES': [
        # 'rest_framework.permissions.DjangoModelPermissionsOrAnonReadOnly'
    ]
}