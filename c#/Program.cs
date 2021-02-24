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
        class ClAsss1
        {
            public string InvoiceNumber { get; set; }
            public int InvoiceType { get; set; }

            public double Amount { get; set; }
            public int CustomerNumber { get; set; }

            public int CustomerType { get; set; }
        }

        private static int[] customerTypes = new[] { 1, 2, 3 };

        private List<ClAsss1> TestData = new List<ClAsss1>
        {
            new ClAsss1 {Amount = 1}, new ClAsss1 {Amount = 2}, new ClAsss1 {Amount = 3}
        };

        static void Main(string[] args)
        {
            double result = RunTheCode("1");

            Console.WriteLine("The total amount is: " + result);
        }

        private static double RunTheCode(string y)
        {
            SqlConnection db = new SqlConnection("Server=My connection string");
            double total = 0;
            foreach (int t in customerTypes)
            {
                List<ClAsss1> x = db.Query<ClAsss1>("Select * From Invoice where CustomerType = " + t + " InvoiceType = " + y).ToList();
                for (int i = 0; i <= x.Count; i++)
                {
                    total = total + x[0].Amount;
                }
            }
            return total;
        }
    }
}
