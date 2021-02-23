using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using Dapper;

namespace CodingTest
{
    class Program
    {
        class Class1
        {
            public string InvoiceNumber { get; set; }
            public int InvoiceType { get; set; }

            public double Amount { get; set; }

            public int CustomerNumber { get; set; }
        }
        static void Main(string[] args)
        {
            double result = RunTheCode("1");

            Console.WriteLine("The total amount is: " + result);
        }

        private static double RunTheCode(string y)
        {
            SqlConnection db = new SqlConnection("Server=My connection string");

            List<Class1> x = db.Query<Class1>( "Select * From Invoice where InvoiceType =" + y).ToList();

            double total = 0;
            for (int i = 0; i <= x.Count; i++)
            {
                total = total + x[i].Amount;
            }

            return total;
        }
    }
}
