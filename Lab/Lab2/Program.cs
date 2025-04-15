using System;
using System.Collections.Generic;
using System.Linq;

class Fraction
{
    public int Numerator { get; set; }
    public int Denominator { get; set; }
    
    public Fraction(int numerator, int denominator)
    {
        if (denominator == 0)
            throw new ArgumentException("Denominator cannot be zero.");
        
        Numerator = numerator;
        Denominator = denominator;
        Simplify();
    }
    
    private void Simplify()
    {
        int gcd = GCD(Math.Abs(Numerator), Denominator);
        Numerator /= gcd;
        Denominator /= gcd;
    }
    
    private int GCD(int a, int b)
    {
        return b == 0 ? a : GCD(b, a % b);
    }
    
    public override bool Equals(object? obj)
    {
        if (obj is Fraction other)
            return this == other;
        return false;
    }

    public override int GetHashCode()
    {
        return (Numerator, Denominator).GetHashCode();
    }
    
    public static Fraction operator +(Fraction a, Fraction b)
    {
        return new Fraction(a.Numerator * b.Denominator + b.Numerator * a.Denominator,
                            a.Denominator * b.Denominator);
    }
    
    public static Fraction operator -(Fraction a, Fraction b)
    {
        return new Fraction(a.Numerator * b.Denominator - b.Numerator * a.Denominator,
                            a.Denominator * b.Denominator);
    }
    
    public static Fraction operator *(Fraction a, Fraction b)
    {
        return new Fraction(a.Numerator * b.Numerator, a.Denominator * b.Denominator);
    }
    
    public static Fraction operator /(Fraction a, Fraction b)
    {
        return new Fraction(a.Numerator * b.Denominator, a.Denominator * b.Numerator);
    }
    
    public Fraction Power(int n)
    {
        return new Fraction((int)Math.Pow(Numerator, n), (int)Math.Pow(Denominator, n));
    }
    
    public override string ToString()
    {
        return $"{Numerator}/{Denominator}";
    }
    
    public static bool operator ==(Fraction a, Fraction b)
    {
        return a.Numerator * b.Denominator == b.Numerator * a.Denominator;
    }
    
    public static bool operator !=(Fraction a, Fraction b) => !(a == b);
    public static bool operator >(Fraction a, Fraction b) => a.Numerator * b.Denominator > b.Numerator * a.Denominator;
    public static bool operator <(Fraction a, Fraction b) => a.Numerator * b.Denominator < b.Numerator * a.Denominator;
    public static bool operator >=(Fraction a, Fraction b) => a > b || a == b;
    public static bool operator <=(Fraction a, Fraction b) => a < b || a == b;
}

class FractionArray
{
    private List<Fraction> fractions;
    
    public FractionArray()
    {
        fractions = new List<Fraction>();
    }
    
    public void Add(Fraction fraction)
    {
        fractions.Add(fraction);
    }
    
    public void Sort()
    {
        fractions = fractions.OrderBy(f => (double)f.Numerator / f.Denominator).ToList();
    }
    
    public void Print()
    {
        foreach (var fraction in fractions)
        {
            Console.WriteLine(fraction);
        }
    }
}

class MainProgram
{
    static void Main()
    {
        FractionArray array = new FractionArray();
        array.Add(new Fraction(1, 2));
        array.Add(new Fraction(3, 4));
        array.Add(new Fraction(1, 3));
        array.Add(new Fraction(2, 5));
        
        Console.WriteLine("Before Sorting:");
        array.Print();
        
        array.Sort();
        
        Console.WriteLine("After Sorting:");
        array.Print();
    }
}
