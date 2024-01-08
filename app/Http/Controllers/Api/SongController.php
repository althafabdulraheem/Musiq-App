<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SongController extends Controller
{
    public function getSongs()
    {
       
        $songData[0]=['song_name'=>'ANIMAL| PAPA MERI JAAN',
                    'artist'=>'SONU NIGAM',
                    'song'=>config('app.url').'uploads/music/1.mp3',
                    'image'=>config('app.url').'uploads/images/1.jpg'];
        $songData[1]=['song_name'=>'What Jhumka? | Rocky Aur Rani Kii Prem Kahaani',
                        'artist'=>'Arijit Singh and Jonita Gandhi',
                        'song'=>config('app.url').'uploads/music/2.mp3',
                        'image'=>config('app.url').'uploads/images/2.jpg'];        
                     
        return response()->json(['status'=>true,'message'=>'SUCCESS','data'=>$songData]);
    }
}
