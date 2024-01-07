<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use Auth;

class AuthController extends Controller
{
    public function login(UserRequest $request)
    {
      dd($request->all());
        if(Auth::attempt(['email'=>$request->email,'password'=>$request->password]))
        {
            $token=user()->createToken('musin-app-token')->accessToken;
            return response()->json(['status'=>true,'token'=>$token],200);
        }
        else{
            return response()->json(['status'=>false,'message'=>'Invalid user credentials'],422);
        }
    }
}
