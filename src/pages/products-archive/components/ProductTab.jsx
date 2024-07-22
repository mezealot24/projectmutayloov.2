import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductTab = ({ product }) => {
  return (
    <Tabs defaultValue="detail" className="w-full">
      <TabsList className="bg-base-100">
        <TabsTrigger value="detail">Detail</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
      </TabsList>
      <TabsContent value="detail" className="w-full p-4 bg-base-100">
        <p>{product?.desc}</p>
      </TabsContent>
      <TabsContent value="reviews" className="w-full p-4 bg-base-100">
        Reviews
      </TabsContent>
    </Tabs>
  );
};

export default ProductTab;
