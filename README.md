# ⚡ Real-Time Chat — Enterprise Laravel WebSocket Application

A high-performance, real-time chat application built with **Laravel 11** and **Laravel Reverb**. Demonstrates modern WebSocket implementation, authentication, and scalable architecture for instant messaging.

![Technology](https://img.shields.io/badge/Framework-Laravel%2011-red?style=flat-square)
![PHP Version](https://img.shields.io/badge/PHP-8.2%2B-blue?style=flat-square)
![WebSocket](https://img.shields.io/badge/WebSocket-Reverb-green?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)

---

## 🎯 Project Overview

**Real-Time Chat** is a modern Laravel application showcasing enterprise-grade real-time messaging capabilities using **Laravel Reverb** (Laravel's native WebSocket server). This project demonstrates:

- ✅ WebSocket implementation for instant messaging
- ✅ Secure user authentication with Laravel Sanctum
- ✅ Database message persistence with Eloquent ORM
- ✅ Scalable event broadcasting system
- ✅ Production-ready architecture

Perfect for learning modern Laravel patterns and real-time application development.

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────┐
│       Real-Time Chat Application        │
├─────────────────────────────────────────┤
│                                         │
│    ┌──────────────────────────────┐    │
│    │   Laravel Backend (PHP)      │    │
│    │  ─────────────────────────   │    │
│    │  • REST API Endpoints        │    │
│    │  • User Management           │    │
│    │  • Message Handling          │    │
│    │  • Database (SQLite/MySQL)   │    │
│    └──────────────────────────────┘    │
│                 ▲                       │
│                 │                       │
│         ┌───────┴───────┐              │
│         │               │              │
│    ┌────────┐      ┌─────────┐        │
│    │Reverb  │      │  API    │        │
│    │WebSocket       │Requests │        │
│    └────────┘      └─────────┘        │
│         ▲               ▲              │
│         │               │              │
│    ┌────┴───────────────┴─────┐       │
│    │   Frontend (Browser)      │       │
│    │  • Vue/React/Blade UI    │       │
│    │  • WebSocket Connection   │       │
│    │  • Real-Time Events       │       │
│    └───────────────────────────┘       │
│                                         │
└─────────────────────────────────────────┘
```

### Key Components

| Component | Technology | Purpose |
|-----------|-----------|---------|
| **Framework** | Laravel 11 | Backend application framework |
| **WebSocket** | Laravel Reverb | Real-time bidirectional communication |
| **Authentication** | Laravel Sanctum | Secure API token authentication |
| **Database** | SQLite/MySQL | Message & user data persistence |
| **ORM** | Eloquent | Database abstraction layer |
| **Broadcasting** | Laravel Events | Event-driven architecture |

---

## ✨ Features

### 🔐 Authentication & Security
- User registration and login
- API token-based authentication (Sanctum)
- Password hashing (bcrypt)
- Protected routes and endpoints

### 💬 Real-Time Messaging
- Instant message delivery via WebSocket
- Private and group conversations
- Online user presence detection
- Typing indicators

### 📊 Message Management
- Full CRUD operations for messages
- Message history persistence
- Conversation threads
- User profiles

### 🚀 Performance & Scalability
- Efficient database queries
- Connection pooling
- Event broadcasting optimization
- Queue system for heavy operations

### 🛡️ Production Ready
- Input validation
- Error handling
- CORS configuration
- Environment-based configuration

---

## 🚀 Quick Start Guide

### Prerequisites
- **PHP** 8.2 or higher
- **Composer** (PHP dependency manager)
- **Node.js** 18+ (for npm/yarn)
- **SQLite** or **MySQL** database
- **Git**

### Installation Steps

#### 1️⃣ Clone & Setup Project

```bash
# Clone the repository
git clone https://github.com/ammar123sa/realtime-chat.git
cd realtime-chat

# Install PHP dependencies
composer install

# Create environment file
cp .env.example .env

# Generate application key
php artisan key:generate
```

#### 2️⃣ Database Configuration

**Option A: SQLite (Quick Setup)**
```bash
# Create SQLite database
touch database/database.sqlite

# Run migrations
php artisan migrate

# (Optional) Seed sample data
php artisan db:seed
```

**Option B: MySQL**
```bash
# Update .env file
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=realtime_chat
DB_USERNAME=root
DB_PASSWORD=

# Run migrations
php artisan migrate
```

#### 3️⃣ Frontend Assets (Optional)

```bash
# Install Node dependencies
npm install

# Build frontend assets
npm run build

# Or development with hot reload
npm run dev
```

#### 4️⃣ Start the Application

```bash
# Start Laravel development server
php artisan serve

# In another terminal, start Reverb WebSocket server
php artisan reverb:start

# Access application at http://localhost:8000
```

---

## 📦 Technology Stack

### Backend Dependencies

```json
{
  "php": "^8.2",
  "laravel/framework": "^11.0",
  "laravel/reverb": "^1.0",
  "laravel/sanctum": "^4.0",
  "laravel/tinker": "^2.9",
  "laravel/ui": "^4.6"
}
```

### Development Dependencies

```json
{
  "development": {
    "fakerphp/faker": "^1.23",
    "laravel/pint": "^1.13",
    "laravel/sail": "^1.26",
    "mockery/mockery": "^1.6",
    "nunomaduro/collision": "^8.0",
    "phpunit/phpunit": "^10.5",
    "spatie/laravel-ignition": "^2.4"
  }
}
```

### Frontend Tech

| Tool | Purpose |
|------|---------|
| **Vite** | Fast build tool |
| **React** | Component framework (optional) |
| **Axios** | HTTP client |
| **Bootstrap** | CSS framework |
| **SASS** | CSS preprocessing |
| **Pusher.js** | WebSocket client |
| **Laravel Echo** | WebSocket wrapper |

---

## 📁 Project Structure

```
realtime-chat/
├── app/
│   ├── Http/
│   │   ├── Controllers/        # API controllers
│   │   ├── Middleware/         # Authentication middleware
│   │   └── Requests/           # Form validation
│   ├── Models/
│   │   ├── User.php            # User model
│   │   ├── Message.php         # Message model
│   │   └── Conversation.php    # Conversation model
│   ├── Events/
│   │   ├── MessageSent.php     # Message broadcast event
│   │   └── UserOnline.php      # Presence tracking
│   ├── Listeners/              # Event listeners
│   └── Broadcasting/           # Channel definitions
│
├── database/
│   ├── migrations/
│   │   ├── users_table.php
│   │   ├── messages_table.php
│   │   └── conversations_table.php
│   ├── seeders/                # Sample data
│   └── database.sqlite         # SQLite database
│
├── routes/
│   ├── web.php                 # Web routes
│   └── api.php                 # API routes
│
├── config/
│   ├── broadcasting.php        # WebSocket config
│   ├── database.php            # Database config
│   └── app.php                 # App configuration
│
├── resources/
│   ├── views/
│   │   ├── welcome.blade.php
│   │   └── layouts/
│   ├── js/
│   │   └── app.js              # JavaScript entry
│   └── css/
│       └── app.css             # Stylesheets
│
├── storage/                    # Logs, uploads, cache
├── tests/                      # Unit & feature tests
├── public/                     # Web root
├── .env.example                # Environment template
├── composer.json               # PHP dependencies
├── package.json                # Node dependencies
├── phpunit.xml                 # Test configuration
└── README.md                   # Documentation
```

---

## 🔌 API Endpoints

### Authentication Endpoints

```http
POST /api/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

```http
POST /api/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

```http
POST /api/logout
Authorization: Bearer {token}
```

### Message Endpoints

```http
GET /api/messages
Authorization: Bearer {token}
```

```http
POST /api/messages
Authorization: Bearer {token}
Content-Type: application/json

{
  "content": "Hello World",
  "conversation_id": 1,
  "recipient_id": 2
}
```

```http
GET /api/messages/{id}
Authorization: Bearer {token}
```

```http
PUT /api/messages/{id}
Authorization: Bearer {token}
Content-Type: application/json

{
  "content": "Updated message"
}
```

```http
DELETE /api/messages/{id}
Authorization: Bearer {token}
```

### User Endpoints

```http
GET /api/users
Authorization: Bearer {token}
```

```http
GET /api/users/{id}
Authorization: Bearer {token}
```

```http
PUT /api/users/{id}
Authorization: Bearer {token}
Content-Type: application/json

{
  "name": "Updated Name"
}
```

---

## 🔌 WebSocket Events (Broadcasting)

### Event Broadcasting with Reverb

**Server Events:**
```php
// In app/Events/MessageSent.php
class MessageSent implements ShouldBroadcast
{
    public function broadcastOn(): array
    {
        return [
            new PrivateChannel("chat.{$this->message->conversation_id}")
        ];
    }
}
```

### Client-Side WebSocket Integration

```javascript
// Using Laravel Echo
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.Pusher = Pusher;

window.Echo = new Echo({
    broadcaster: 'reverb',
    key: process.env.REACT_APP_REVERB_APP_KEY,
    wsHost: process.env.REACT_APP_REVERB_HOST,
    wsPort: process.env.REACT_APP_REVERB_PORT,
    wssPort: process.env.REACT_APP_REVERB_PORT,
    forceTLS: false,
});

// Listen for messages
Echo.private(`chat.1`)
    .listen('MessageSent', (event) => {
        console.log('New message:', event.message);
        addMessageToUI(event.message);
    });
```

---

## 🗄️ Database Schema

### Users Table
```sql
CREATE TABLE users (
  id BIGINT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  password VARCHAR(255),
  avatar_url VARCHAR(255),
  is_online BOOLEAN DEFAULT false,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
```

### Messages Table
```sql
CREATE TABLE messages (
  id BIGINT PRIMARY KEY,
  conversation_id BIGINT,
  user_id BIGINT,
  content TEXT,
  read_at TIMESTAMP NULL,
  created_at TIMESTAMP,
  updated_at TIMESTAMP,
  FOREIGN KEY (conversation_id),
  FOREIGN KEY (user_id)
);
```

### Conversations Table
```sql
CREATE TABLE conversations (
  id BIGINT PRIMARY KEY,
  name VARCHAR(255),
  is_group BOOLEAN DEFAULT false,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
```

### Conversation Participants Table
```sql
CREATE TABLE conversation_user (
  id BIGINT PRIMARY KEY,
  conversation_id BIGINT,
  user_id BIGINT,
  joined_at TIMESTAMP,
  FOREIGN KEY (conversation_id),
  FOREIGN KEY (user_id)
);
```

---

## 🧪 Testing

### Run All Tests
```bash
php artisan test
```

### Run Specific Test
```bash
php artisan test tests/Feature/MessageTest.php
```

### Run with Coverage Report
```bash
php artisan test --coverage
```

### Example Feature Test
```php
<?php
namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Message;

class MessageTest extends TestCase
{
    public function test_user_can_send_message()
    {
        $user = User::factory()->create();
        $recipient = User::factory()->create();
        
        $response = $this->actingAs($user)
            ->postJson('/api/messages', [
                'content' => 'Hello',
                'recipient_id' => $recipient->id
            ]);
        
        $response->assertStatus(201);
        $this->assertDatabaseHas('messages', [
            'user_id' => $user->id,
            'content' => 'Hello'
        ]);
    }
}
```

---

## ⚙️ Configuration

### Environment Variables (.env)

```env
APP_NAME="Real-Time Chat"
APP_ENV=local
APP_DEBUG=true
APP_URL=http://localhost:8000
APP_KEY=

# Database Configuration
DB_CONNECTION=sqlite
# DB_DATABASE=/full/path/to/database.sqlite
# OR for MySQL:
# DB_CONNECTION=mysql
# DB_HOST=127.0.0.1
# DB_PORT=3306
# DB_DATABASE=realtime_chat
# DB_USERNAME=root
# DB_PASSWORD=

# Session Configuration
SESSION_DRIVER=cookie
SESSION_LIFETIME=120

# Cache Configuration
CACHE_DRIVER=file

# Queue Configuration
QUEUE_CONNECTION=sync

# Mail Configuration (Optional)
MAIL_MAILER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=465

# Reverb WebSocket Configuration
REVERB_APP_ID=your-app-id
REVERB_APP_KEY=your-app-key
REVERB_APP_SECRET=your-app-secret
REVERB_HOST=localhost
REVERB_PORT=8080
```

### Broadcasting Configuration (config/broadcasting.php)

```php
'connections' => [
    'reverb' => [
        'driver' => 'reverb',
        'key' => env('REVERB_APP_KEY'),
        'secret' => env('REVERB_APP_SECRET'),
        'app_id' => env('REVERB_APP_ID'),
        'host' => env('REVERB_HOST'),
        'port' => env('REVERB_PORT'),
        'scheme' => env('REVERB_SCHEME', 'http'),
        'useTLS' => env('REVERB_SCHEME') === 'https',
    ],
],
```

---

## 🔒 Security Features

### ✅ Implemented Security Measures

- **CSRF Protection** - Laravel's built-in CSRF tokens
- **Sanctum Authentication** - Secure token-based API auth
- **Password Hashing** - bcrypt encryption
- **Input Validation** - Form request validation
- **SQL Injection Prevention** - Eloquent ORM parameterized queries
- **XSS Protection** - Blade template escaping
- **CORS Configuration** - Controlled cross-origin requests
- **Rate Limiting** - Throttle middleware for endpoints

### ⚠️ Production Security Checklist

- [ ] Enable HTTPS in production
- [ ] Configure proper CORS headers
- [ ] Implement rate limiting
- [ ] Add request validation on all inputs
- [ ] Use environment variables for secrets
- [ ] Enable query logging in production
- [ ] Setup monitoring and alerting
- [ ] Regular security audits
- [ ] Database backups strategy
- [ ] API documentation (Swagger/Postman)

---

## 🐛 Troubleshooting

### Common Issues & Solutions

| Problem | Solution |
|---------|----------|
| **Reverb connection fails** | Ensure `php artisan reverb:start` is running |
| **Database not found** | Run `touch database/database.sqlite` for SQLite |
| **Migration errors** | Clear cache with `php artisan cache:clear` |
| **WebSocket 403 error** | Check `REVERB_APP_KEY` in `.env` |
| **Port 8000 already in use** | Use `php artisan serve --port=8001` |
| **Sanctum token invalid** | Verify token is sent in `Authorization: Bearer {token}` header |
| **Assets not loading** | Run `npm run build` or `npm run dev` |

### Debug Commands

```bash
# Check application status
php artisan tinker

# View environment setup
php artisan env

# Clear all caches
php artisan cache:clear

# Reset database
php artisan migrate:fresh --seed

# View database using artisan
php artisan tinker
>>> DB::table('users')->get()
```

---

## 📊 Performance Optimization

### Database Optimization
```php
// Use eager loading to prevent N+1 queries
$messages = Message::with('user', 'conversation')->get();

// Add indexes to frequently queried columns
Schema::table('messages', function (Blueprint $table) {
    $table->index('conversation_id');
    $table->index('user_id');
    $table->index('created_at');
});
```

### Caching Strategy
```php
// Cache user data
$user = Cache::remember("user.{$userId}", 3600, function () {
    return User::find($userId);
});
```

### Query Optimization
```php
// Limit queries
$messages = Message::latest()->paginate(20);

// Select only needed columns
$users = User::select('id', 'name', 'email')->get();
```

---

## 🚀 Deployment

### Docker Support

```dockerfile
FROM php:8.2-fpm

# Install dependencies
RUN apt-get update && apt-get install -y \
    composer \
    nodejs \
    npm

WORKDIR /app

COPY . .

RUN composer install
RUN npm install && npm run build

CMD ["php", "artisan", "serve", "--host=0.0.0.0"]
```

### Deploy to Production

```bash
# Build assets
npm run build

# Install dependencies
composer install --no-dev

# Generate key
php artisan key:generate

# Run migrations
php artisan migrate --force

# Start Reverb server
php artisan reverb:start

# Start Laravel app
php artisan serve
```

---

## 📚 Laravel Reverb Resources

- [Laravel Reverb Documentation](https://laravel.com/docs/reverb)
- [Broadcasting Guide](https://laravel.com/docs/broadcasting)
- [Sanctum Authentication](https://laravel.com/docs/sanctum)
- [Eloquent ORM](https://laravel.com/docs/eloquent)

---

## 🤝 Contributing

Contributions are welcome! Follow these steps:

1. Fork the repository
2. Create feature branch: `git checkout -b feature/NewFeature`
3. Commit changes: `git commit -m 'Add NewFeature'`
4. Push to branch: `git push origin feature/NewFeature`
5. Open Pull Request

### Code Style

- Follow [PSR-12 coding standard](https://www.php-fig.org/psr/psr-12/)
- Use Laravel conventions
- Write tests for new features
- Document complex logic

---

## 📝 License

This project is licensed under the **MIT License** - see the LICENSE file for details.

---

## 👨‍💻 Author

**Ammar Alali** (@ammar123sa)
- GitHub: [@ammar123sa](https://github.com/ammar123sa)
- Project: [realtime-chat](https://github.com/ammar123sa/realtime-chat)

---

## 📊 Project Statistics

| Metric | Value |
|--------|-------|
| **Framework** | Laravel 11 |
| **PHP Version** | 8.2+ |
| **License** | MIT |
| **Status** | Active |
| **Last Updated** | April 2025 |

---

## 🗺️ Development Roadmap

### Current Version (v1.0)
- ✅ User authentication
- ✅ Real-time messaging
- ✅ WebSocket integration
- ✅ Basic API

### Future Enhancements
- [ ] Group chat support
- [ ] File/media sharing
- [ ] Message reactions/emojis
- [ ] Read receipts
- [ ] User presence indicators
- [ ] End-to-end encryption
- [ ] Message search functionality
- [ ] User blocking system
- [ ] Admin dashboard
- [ ] Analytics dashboard

---

## ⚡ Quick Commands Reference

```bash
# Start development
php artisan serve                 # Start Laravel server
php artisan reverb:start         # Start WebSocket server
npm run dev                       # Start Vite dev server

# Database operations
php artisan migrate              # Run migrations
php artisan migrate:fresh        # Reset database
php artisan db:seed             # Seed sample data
php artisan tinker              # Interactive shell

# Code quality
php artisan test                # Run tests
php artisan pint                # Fix code style
php artisan lint                # Check for syntax errors

# Cache & cleanup
php artisan cache:clear         # Clear cache
php artisan route:clear         # Clear routes
php artisan config:clear        # Clear config
```

---

## 📞 Support & Issues

Found a bug? Have a suggestion?

- 🐛 [Report Issues](https://github.com/ammar123sa/realtime-chat/issues)
- 💬 [Start Discussion](https://github.com/ammar123sa/realtime-chat/discussions)
- 📧 Contact: [ammaralalisa@gmail.com](mailto:ammaralalisa@gmail.com)

---

<div align="center">

**[⬆ Back to Top](#-real-time-chat--enterprise-laravel-websocket-application)**

Made with ❤️ by Ammar Alali

⭐ If you found this useful, please star the repository!

</div>
