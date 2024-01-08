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
      
        if(Auth::attempt(['email'=>$request->email,'password'=>$request->password]))
        {
            $token=auth()->user()->createToken('musin-app-token')->accessToken;
            return response()->json(['status'=>true,'token'=>$token],200);
        }
        else{
            return response()->json(['status'=>false,'message'=>'Invalid user credentials'],422);
        }
    }

    public function logout(Request $request)
    {
    //   $request->headers();
        try{
            //     $token=auth()->user()->token();
            // $token->revoke();
            // or
            $request->user()->token()->revoke();
        return response()->json(['status'=>true,'message'=>'SUCCESS'],200);
        }
        catch(\Exception $e)
        {
            dd($e);
        }
        
    }
}
