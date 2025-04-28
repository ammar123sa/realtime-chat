<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;

class MessageSent implements ShouldBroadcast
{
    public $message;

    public function __construct($message)
    {
        $this->message = $message;
    //Log::info('message' , ['message'=>$this->message]);
    }

    public function broadcastOn()
    {
        return new Channel('chat');
    }
    public function broadcastWith()
{
    return [
        'message' => $this->message
    ];
}

}
