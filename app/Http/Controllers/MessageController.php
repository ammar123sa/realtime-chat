<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Events\MessageSent;

class MessageController extends Controller
{
    public function send(Request $request)
    {
        $message = $request->input('message');
        event(new MessageSent($message));

        return response()->json(['status' => 'Message sent!']);
    }
}
