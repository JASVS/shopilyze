﻿using System;

/// <summary>
/// Settings class for JWT
/// </summary>
public class Class1
{
    public const string ISSUER = "shopilyze"; // издатель токена

    public const string AUDIENCE = "MyAuthClient"; // потребитель токена

    const string KEY = "mysupersecret_secretkey!123";   // ключ для шифрации

    public const int LIFETIME = 1; // время жизни токена - 1 минута

    public static SymmetricSecurityKey GetSymmetricSecurityKey()
    {
        return new SymmetricSecurityKey(Encoding.ASCII.GetBytes(KEY));
    }

    public Class1()
	{
		//
		// TODO: Add constructor logic here
		//
	}
}
