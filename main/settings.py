import os

# Serve static files
STATIC_URL = "/static/"

# Directory where Django will look for additional static files
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, "static"),  # General static files
    os.path.join(BASE_DIR, "frontend", "build", "static"),  # React static files
]

# Directory for collected static files (used in production)
STATIC_ROOT = os.path.join(BASE_DIR, "staticfiles")

# Serving React’s index.html as the frontend entry point
TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [os.path.join(BASE_DIR, "frontend", "build")],  # Point to React build directory
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]
