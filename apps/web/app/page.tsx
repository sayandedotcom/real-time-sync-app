"use client";
import { useState } from "react";

import {
  Item,
  SortableList,
  SortableListItem,
} from "../components/ui/sortable-list";
import { Checkbox } from "../components/ui/checkbox";
import { SortableListDemo } from "./demo/page";

export default function Home() {
  // const [items, setItems] = useState<Item[]>([
  //   { text: "Item 1", checked: false, id: 1, description: "Description 1" },
  //   { text: "Item 2", checked: false, id: 2, description: "Description 2" },
  //   { text: "Item 3", checked: false, id: 3, description: "Description 3" },
  // ]);

  // const handleAddItem = () => {
  //   const newItem: Item = {
  //     text: `Item ${items.length + 1}`,
  //     checked: false,
  //     id: items.length + 1,
  //     description: `Description ${items.length + 1}`,
  //   };
  //   setItems([...items, newItem]);
  // };

  // const handleResetItems = () => {
  //   setItems([]);
  // };

  // const handleCompleteItem = (id: number) => {
  //   setItems((prevItems) =>
  //     prevItems.map((item) =>
  //       item.id === id ? { ...item, checked: !item.checked } : item
  //     )
  //   );
  // };

  // const handleRemoveItem = (id: number) => {
  //   setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  // };

  // const renderItem = (
  //   item: Item,
  //   onCompleteItem: (id: number) => void,
  //   onRemoveItem: (id: number) => void
  // ) => (
  //   <SortableListItem
  //     key={item.id}
  //     item={item}
  //     onCompleteItem={onCompleteItem}
  //     onRemoveItem={onRemoveItem}
  //     handleDrag={() => {}}
  //   />
  // );

  return (
    <div className="p-5">
      <h1 className="text-2xl text-center font-bold mb-4">
        Realtime Sync List ! 🔁
      </h1>
      <SortableListDemo />

      {/* <SortableList
        items={items}
        setItems={setItems}
        onAddItem={handleAddItem}
        onResetItems={handleResetItems}
        onCompleteItem={handleCompleteItem}
        renderItem={renderItem}
      /> */}
    </div>
  );
}
