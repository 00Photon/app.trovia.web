"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { ChevronDown } from "lucide-react"

export default function TransactionsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Transaction Management</h1>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white">
            Export Data
          </Button>
          <Button className="bg-teal-600 hover:bg-teal-700">Generate Report</Button>
        </div>
      </div>

      {/* Transaction Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Available Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">₦2,450,000</div>
            <p className="text-xs text-green-600 mt-1">Platform wallet balance</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Transaction Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-teal-800">₦15.2M</div>
            <p className="text-xs text-blue-600 mt-1">+₦2.1M this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-teal-800">8,547</div>
            <p className="text-xs text-green-600 mt-1">+342 this month</p>
          </CardContent>
        </Card>
      </div>

      {/* Transaction History */}
      <Card>
        <CardHeader>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <CardTitle>All Transactions</CardTitle>
              <CardDescription>Monitor all platform transactions and their status</CardDescription>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <select className="px-3 py-2 border border-gray-300 rounded-md text-sm w-full sm:w-auto">
                <option value="all">All Status</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
                <option value="failed">Failed</option>
                <option value="refunded">Refunded</option>
              </select>
              <select className="px-3 py-2 border border-gray-300 rounded-md text-sm w-full sm:w-auto">
                <option value="all">All Types</option>
                <option value="payment">Payments</option>
                <option value="deposit">Deposits</option>
                <option value="withdrawal">Withdrawals</option>
                <option value="refund">Refunds</option>
              </select>
              <Input placeholder="Search transactions..." className="w-full sm:w-48" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-[120px]">Transaction ID</TableHead>
                  <TableHead className="min-w-[150px]">User</TableHead>
                  <TableHead className="min-w-[100px]">Type</TableHead>
                  <TableHead className="min-w-[100px]">Amount</TableHead>
                  <TableHead className="min-w-[100px]">Status</TableHead>
                  <TableHead className="min-w-[150px]">Date</TableHead>
                  <TableHead className="min-w-[80px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  {
                    id: "TXN-001234",
                    user: "Aisha Mohammed",
                    type: "Payment",
                    amount: "₦15,000",
                    status: "Completed",
                    date: "Jun 7, 2025 14:30",
                    isNegative: false,
                  },
                  {
                    id: "TXN-001235",
                    user: "Chidi Okafor",
                    type: "Withdrawal",
                    amount: "₦25,000",
                    status: "Pending",
                    date: "Jun 7, 2025 12:15",
                    isNegative: true,
                  },
                  {
                    id: "TXN-001236",
                    user: "Blessing Okonkwo",
                    type: "Deposit",
                    amount: "₦50,000",
                    status: "Completed",
                    date: "Jun 6, 2025 16:45",
                    isNegative: false,
                  },
                  {
                    id: "TXN-001237",
                    user: "David Adeyemi",
                    type: "Payment",
                    amount: "₦8,500",
                    status: "Failed",
                    date: "Jun 6, 2025 11:20",
                    isNegative: false,
                  },
                  {
                    id: "TXN-001238",
                    user: "Elizabeth Nnamdi",
                    type: "Refund",
                    amount: "₦12,000",
                    status: "Completed",
                    date: "Jun 5, 2025 09:30",
                    isNegative: true,
                  },
                  {
                    id: "TXN-001239",
                    user: "Fatima Ibrahim",
                    type: "Deposit",
                    amount: "₦30,000",
                    status: "Completed",
                    date: "Jun 5, 2025 08:15",
                    isNegative: false,
                  },
                  {
                    id: "TXN-001240",
                    user: "Emeka Obi",
                    type: "Payment",
                    amount: "₦18,750",
                    status: "Pending",
                    date: "Jun 4, 2025 15:45",
                    isNegative: false,
                  },
                  {
                    id: "TXN-001241",
                    user: "Grace Adebayo",
                    type: "Withdrawal",
                    amount: "₦22,500",
                    status: "Completed",
                    date: "Jun 4, 2025 13:20",
                    isNegative: true,
                  },
                ].map((transaction, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-mono text-sm">{transaction.id}</TableCell>
                    <TableCell className="font-medium truncate max-w-[120px]" title={transaction.user}>
                      {transaction.user}
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={
                          transaction.type === "Deposit"
                            ? "bg-green-100 text-green-800"
                            : transaction.type === "Payment"
                              ? "bg-blue-100 text-blue-800"
                              : transaction.type === "Withdrawal"
                                ? "bg-orange-100 text-orange-800"
                                : "bg-purple-100 text-purple-800"
                        }
                      >
                        {transaction.type}
                      </Badge>
                    </TableCell>
                    <TableCell className={`font-medium ${transaction.isNegative ? "text-red-600" : "text-green-600"}`}>
                      {transaction.amount}
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={
                          transaction.status === "Completed"
                            ? "bg-green-600"
                            : transaction.status === "Pending"
                              ? "bg-yellow-500"
                              : "bg-red-500"
                        }
                      >
                        {transaction.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-gray-500">{transaction.date}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4 px-4 pb-4">
            <p className="text-sm text-gray-500">Showing 8 of 8,547 transactions</p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
