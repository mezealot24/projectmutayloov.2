import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TicketPercent, PackageCheck } from "lucide-react";
import promtPay from "@/assets/icons/promptPay.png";

// components
import Head from "../components/Head";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";

// api
import { getProfile } from "@/api/authApi";
import { createOrder } from "@/api/apiOrder"; // Import createOrder function from your API

const Checkout = () => {
  const { toast } = useToast();
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedProducts } = location.state || {};
  const [userData, setUserData] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    address: [],
  });
  const [selectedAddress, setSelectedAddress] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("Prompt Pay");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profile = await getProfile();
        setUserData(profile.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchProfile();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddressChange = (value) => {
    const address = userData.address.find((addr) => addr._id === value);
    setSelectedAddress(address);
  };

  const handleCheckout = async () => {
    const order = {
      shippingAddress: selectedAddress,
      products: selectedProducts,
      total:
        selectedProducts.reduce(
          (sum, product) => sum + product.product.price,
          0
        ) + 3, // Assuming shipping is 3 Bath
      paymentMethod,
      status: "Pending",
    };

    try {
      const response = await createOrder(order);
      navigate("/complete", { state: { orderId: response.order._id } }); // Pass orderId to /complete
    } catch (error) {
      console.error(
        "Error creating order:",
        error.response ? error.response.data : error.message
      );
      alert("Failed to place the order. Please try again.");
    }
  };

  return (
    <main className="container">
      <Head step={2} />
      <section className="w-full grid grid-cols-12 gap-8 mb-24">
        {/* left */}
        <div className="col-span-12 lg:col-span-7 xl:col-span-8 ">
          <div className="flex flex-col border rounded-lg p-8">
            <h2 className="pb-6">Contact Information</h2>
            <form className="flex flex-col gap-4">
              <div className="grid gap-1.5">
                <Label>Billing Address</Label>
                <Select onValueChange={handleAddressChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select shipping address" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select shipping address</SelectLabel>
                      {userData.address.map((address) => (
                        <SelectItem key={address._id} value={address._id}>
                          {address.address_line1}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="grid gap-1.5">
                  <Label>First Name *</Label>
                  <Input
                    name="fname"
                    value={userData.fname}
                    onChange={handleInputChange}
                    type="text"
                    placeholder=""
                  />
                </div>
                <div className="grid gap-1.5">
                  <Label>Last Name *</Label>
                  <Input
                    name="lname"
                    value={userData.lname}
                    onChange={handleInputChange}
                    type="text"
                    placeholder=""
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="grid gap-1.5">
                  <Label>Phone *</Label>
                  <Input
                    name="phone"
                    value={userData.phone}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="098 765 4321"
                  />
                </div>
                <div className="grid gap-1.5">
                  <Label>Email * </Label>
                  <Input
                    name="email"
                    value={userData.email}
                    onChange={handleInputChange}
                    type="email"
                    placeholder="somchai@mail.com"
                  />
                </div>
              </div>

              <div className="grid gap-8">
                <div className="grid gap-1.5">
                  <Label>Address *</Label>
                  <Input
                    name="address_line1"
                    value={selectedAddress.address_line1 || ""}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Address"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-1.5">
                    <Label>Subdistrict</Label>
                    <Input
                      name="subdistrict"
                      value={selectedAddress.subdistrict || ""}
                      onChange={handleInputChange}
                      type="text"
                      placeholder="Subdistrict"
                    />
                  </div>
                  <div className="grid gap-1.5">
                    <Label>District</Label>
                    <Input
                      name="district"
                      value={selectedAddress.district || ""}
                      onChange={handleInputChange}
                      type="text"
                      placeholder="District"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-1.5">
                    <Label>Province</Label>
                    <Input
                      name="province"
                      value={selectedAddress.province || ""}
                      onChange={handleInputChange}
                      type="text"
                      placeholder="Province"
                    />
                  </div>
                  <div className="grid gap-1.5">
                    <Label>Postcode</Label>
                    <Input
                      name="postcode"
                      value={selectedAddress.postcode || ""}
                      onChange={handleInputChange}
                      type="text"
                      placeholder="Postcode"
                    />
                  </div>
                </div>
              </div>

              <div className="grid gap-1.5">
                <Label>Additional information</Label>
                <Input type="text" placeholder="Various notes such as ...." />
              </div>
            </form>
          </div>
        </div>

        {/* right */}
        <div className="col-span-12 lg:col-span-5 xl:col-span-4 flex flex-col gap-8">
          {/* Order summary */}
          <div className="flex flex-col border rounded-lg p-8">
            <h2 className="pb-6">Order summary</h2>
            <div>
              {selectedProducts.map((product) => (
                <div key={product._id} className="flex justify-between py-4">
                  <div className="flex items-start gap-4">
                    <figure className="w-24 h-24">
                      <img
                        src={product.product.image.thumbnail}
                        alt={product.product.name}
                        className="w-full h-full object-cover"
                      />
                    </figure>
                    <div className="flex flex-col gap-2">
                      <p className="text-base font-semibold">
                        {product.product.name}
                      </p>
                      <p className="text-sm">Color: {product.product.color}</p>
                    </div>
                  </div>
                  <div className="flex items-start justify-end">
                    <p className="text-lg font-semibold">
                      {product.product.price} Bath
                    </p>
                  </div>
                </div>
              ))}
              <Separator />
            </div>
            <div className="py-4">
              <div className="flex gap-4">
                <Input type="text" placeholder="Coupon code" />
                <Button>Apply</Button>
              </div>
              <div className="flex justify-between py-2 px-1">
                <TicketPercent />
                <p className="text-green-600 text-base font-medium">
                  - 0.00 Bath
                </p>
              </div>
              <Separator />
              <div className="flex justify-between py-2 px-1">
                <p>Shipping</p>
                <p className="text-green-600 text-base font-medium">3 Bath</p>
              </div>
              <Separator />
              <div className="flex justify-between py-4 px-1">
                <p className="text-lg font-semibold">Total</p>
                <p className="text-base font-medium">199.00 $</p>
              </div>
            </div>
          </div>

          {/* payment method */}
          <div className="flex flex-col border rounded-lg p-8">
            <h2 className="pb-6">Payment method</h2>
            <div>
              <RadioGroup
                defaultValue="Prompt Pay"
                onValueChange={setPaymentMethod}
              >
                <div className="flex items-center space-x-4 p-4 border-2 rounded-lg">
                  <RadioGroupItem value="Prompt Pay" />
                  <div className="w-full flex justify-between items-center">
                    <Label htmlFor="r1">Prompt Pay</Label>
                    <img src={promtPay} alt="Prompt Pay" className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 border-2 rounded-lg">
                  <RadioGroupItem value="Cash on delivery" />
                  <div className="w-full flex justify-between items-center">
                    <Label htmlFor="r2">Cash on delivery</Label>
                    <PackageCheck />
                  </div>
                </div>
              </RadioGroup>
            </div>
            <Button className="w-full mt-4" onClick={handleCheckout}>
              Checkout
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Checkout;
