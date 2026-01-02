"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertCircle, Check, CreditCard, ArrowRight } from "lucide-react"

export default function WalletPage() {
  const [addFundsModalOpen, setAddFundsModalOpen] = useState(false)
  const [withdrawModalOpen, setWithdrawModalOpen] = useState(false)
  const [withdrawStep, setWithdrawStep] = useState(1)
  const [withdrawAmount, setWithdrawAmount] = useState("")
  const [withdrawAccount, setWithdrawAccount] = useState("")
  const [transactionPin, setTransactionPin] = useState("")

  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-teal-800">My Wallet</h1>
        <div className="flex gap-3">
          <Button className="bg-green-600 hover:bg-green-700 text-white" onClick={() => setAddFundsModalOpen(true)}>
            Add Funds
          </Button>
          <Button
            variant="outline"
            className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white"
            onClick={() => {
              setWithdrawModalOpen(true)
              setWithdrawStep(1)
            }}
          >
            Withdraw
          </Button>
        </div>
      </div>

      {/* Wallet Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Current Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-teal-800">₦25,750</div>
            <p className="text-xs text-green-600 mt-1">Available for use</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total Deposits</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-teal-800">₦85,000</div>
            <p className="text-xs text-blue-600 mt-1">+₦15,000 this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total Spent</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-teal-800">₦59,250</div>
            <p className="text-xs text-orange-600 mt-1">₦12,000 this month</p>
          </CardContent>
        </Card>
      </div>

      {/* Transaction History */}
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle>Transaction History</CardTitle>
              <CardDescription>Your recent wallet transactions</CardDescription>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
                <option value="all">All Transactions</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
                <option value="failed">Failed</option>
              </select>
              <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
                <option value="all">All Types</option>
                <option value="deposit">Deposits</option>
                <option value="payment">Payments</option>
                <option value="withdrawal">Withdrawals</option>
              </select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium text-gray-500">Date</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500">Description</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500">Type</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500">Amount</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-500">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    date: "Jun 7, 2025",
                    description: "Payment to Chidi Okafor",
                    type: "Payment",
                    amount: "-₦15,000",
                    status: "Completed",
                    isNegative: true,
                  },
                  {
                    date: "Jun 5, 2025",
                    description: "Wallet Top-up",
                    type: "Deposit",
                    amount: "+₦25,000",
                    status: "Completed",
                    isNegative: false,
                  },
                  {
                    date: "Jun 3, 2025",
                    description: "Payment to Amaka Nwosu",
                    type: "Payment",
                    amount: "-₦8,500",
                    status: "Completed",
                    isNegative: true,
                  },
                  {
                    date: "Jun 1, 2025",
                    description: "Withdrawal to Bank",
                    type: "Withdrawal",
                    amount: "-₦10,000",
                    status: "Pending",
                    isNegative: true,
                  },
                  {
                    date: "May 30, 2025",
                    description: "Payment to Samuel Udoakah",
                    type: "Payment",
                    amount: "-₦12,000",
                    status: "Failed",
                    isNegative: true,
                  },
                  {
                    date: "May 28, 2025",
                    description: "Wallet Top-up",
                    type: "Deposit",
                    amount: "+₦20,000",
                    status: "Completed",
                    isNegative: false,
                  },
                ].map((transaction, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4 text-sm">{transaction.date}</td>
                    <td className="py-3 px-4 text-sm font-medium">{transaction.description}</td>
                    <td className="py-3 px-4 text-sm">
                      <Badge
                        className={
                          transaction.type === "Deposit"
                            ? "bg-green-100 text-green-800"
                            : transaction.type === "Payment"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-orange-100 text-orange-800"
                        }
                      >
                        {transaction.type}
                      </Badge>
                    </td>
                    <td
                      className={`py-3 px-4 text-sm font-medium ${transaction.isNegative ? "text-red-600" : "text-green-600"}`}
                    >
                      {transaction.amount}
                    </td>
                    <td className="py-3 px-4 text-sm">
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
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-between mt-4">
            <p className="text-sm text-gray-500">Showing 6 of 24 transactions</p>
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

      {/* Add Funds Modal */}
      <Dialog open={addFundsModalOpen} onOpenChange={setAddFundsModalOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Add Funds to Wallet</DialogTitle>
            <DialogDescription>Choose a payment method to add funds to your wallet.</DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Amount (₦)</Label>
              <Input id="amount" type="number" placeholder="0.00" />
            </div>

            <div className="space-y-2">
              <Label>Payment Method</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="border rounded-lg p-3 cursor-pointer hover:border-teal-600 flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-teal-600" />
                  <span>Credit/Debit Card</span>
                </div>
                <div className="border rounded-lg p-3 cursor-pointer hover:border-teal-600 flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-teal-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span>Bank Transfer</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiryDate">Expiry Date</Label>
                <Input id="expiryDate" placeholder="MM/YY" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvv">CVV</Label>
                <Input id="cvv" placeholder="123" />
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setAddFundsModalOpen(false)}>
              Cancel
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">Add Funds</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Withdraw Modal */}
      <Dialog open={withdrawModalOpen} onOpenChange={setWithdrawModalOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Withdraw Funds</DialogTitle>
            <DialogDescription>
              {withdrawStep === 1 && "Enter withdrawal details to transfer funds to your bank account."}
              {withdrawStep === 2 && "Please verify your identity by entering your transaction PIN."}
              {withdrawStep === 3 && "Confirm your withdrawal details."}
            </DialogDescription>
          </DialogHeader>

          {/* Step 1: Withdrawal Details */}
          {withdrawStep === 1 && (
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="withdrawAmount">Amount (₦)</Label>
                <Input
                  id="withdrawAmount"
                  type="number"
                  placeholder="0.00"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bankAccount">Select Bank Account</Label>
                <Select value={withdrawAccount} onValueChange={setWithdrawAccount}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select bank account" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="account1">GTBank - **** 1234</SelectItem>
                    <SelectItem value="account2">First Bank - **** 5678</SelectItem>
                    <SelectItem value="account3">Access Bank - **** 9012</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <AlertCircle className="h-5 w-5 text-yellow-500 mr-2" />
                <p className="text-sm text-yellow-700">Minimum withdrawal amount is ₦1,000</p>
              </div>

              <DialogFooter className="pt-4">
                <Button variant="outline" onClick={() => setWithdrawModalOpen(false)}>
                  Cancel
                </Button>
                <Button
                  className="bg-teal-600 hover:bg-teal-700"
                  onClick={() => setWithdrawStep(2)}
                  disabled={!withdrawAmount || !withdrawAccount}
                >
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </DialogFooter>
            </div>
          )}

          {/* Step 2: Transaction PIN */}
          {withdrawStep === 2 && (
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="transactionPin">Enter Transaction PIN</Label>
                <Input
                  id="transactionPin"
                  type="password"
                  maxLength={4}
                  placeholder="****"
                  value={transactionPin}
                  onChange={(e) => setTransactionPin(e.target.value)}
                />
                <p className="text-xs text-gray-500">Enter your 4-digit transaction PIN to authorize this withdrawal</p>
              </div>

              <DialogFooter className="pt-4">
                <Button variant="outline" onClick={() => setWithdrawStep(1)}>
                  Back
                </Button>
                <Button
                  className="bg-teal-600 hover:bg-teal-700"
                  onClick={() => setWithdrawStep(3)}
                  disabled={transactionPin.length !== 4}
                >
                  Verify
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </DialogFooter>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {withdrawStep === 3 && (
            <div className="space-y-4 py-4">
              <div className="p-4 border rounded-lg space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-500">Amount:</span>
                  <span className="font-medium">₦{withdrawAmount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Bank Account:</span>
                  <span className="font-medium">
                    {withdrawAccount === "account1"
                      ? "GTBank - **** 1234"
                      : withdrawAccount === "account2"
                        ? "First Bank - **** 5678"
                        : "Access Bank - **** 9012"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Fee:</span>
                  <span className="font-medium">₦100</span>
                </div>
                <div className="flex justify-between pt-2 border-t">
                  <span className="font-medium">Total:</span>
                  <span className="font-medium">₦{Number.parseInt(withdrawAmount) + 100}</span>
                </div>
              </div>

              <div className="flex items-center p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <AlertCircle className="h-5 w-5 text-blue-500 mr-2" />
                <p className="text-sm text-blue-700">Withdrawal will be processed within 24 hours</p>
              </div>

              <DialogFooter className="pt-4">
                <Button variant="outline" onClick={() => setWithdrawStep(2)}>
                  Back
                </Button>
                <Button
                  className="bg-teal-600 hover:bg-teal-700"
                  onClick={() => {
                    // Handle withdrawal submission
                    setWithdrawModalOpen(false)
                    // Reset form
                    setWithdrawStep(1)
                    setWithdrawAmount("")
                    setWithdrawAccount("")
                    setTransactionPin("")
                  }}
                >
                  Confirm Withdrawal
                  <Check className="ml-2 h-4 w-4" />
                </Button>
              </DialogFooter>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
