import React from "react";
import { Input } from "./ui/input.jsx";
import { Button } from "./ui/button.jsx";
import { Label } from "./ui/label.jsx";
import { Select, SelectTrigger, SelectContent, SelectItem } from "./ui/select.jsx";
import { Textarea } from "./ui/textarea.jsx";
import { Slider } from "./ui/slider.jsx";

const Layout = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Kontierungstempel</h2>
      <p className="mb-4">Please fill out the fields..</p>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="eingegangen_am">eingegangen_am</Label>
          <Input id="eingegangen_am" type="date" />
        </div>
        <div>
          <Label htmlFor="kommentar">Kommentar</Label>
          <Textarea id="kommentar" />
        </div>
        <div>
          <Label htmlFor="faellig_am">fällig_am</Label>
          <Input id="faellig_am" type="date" />
        </div>
        <div>
          <Label htmlFor="skonto">Skonto</Label>
          <Slider id="skonto" defaultValue={[0]} max={100} step={1} />
        </div>
        <div>
          <Label htmlFor="gebucht">gebucht</Label>
          <Input id="gebucht" type="date" />
        </div>
        <div>
          <Label htmlFor="kostenstelle">Kostenstelle</Label>
          <Select>
            <SelectTrigger id="kostenstelle">Select...</SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="konto">Konto</Label>
          <Input id="konto" />
        </div>
        <div>
          <Label htmlFor="vb">VB</Label>
          <Select>
            <SelectTrigger id="vb">Select...</SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="ev_vp">EV/VP</Label>
          <Input id="ev_vp" />
        </div>
        <div>
          <Label htmlFor="ticket_number">Ticket Number</Label>
          <Input id="ticket_number" />
        </div>
        <div>
          <Label htmlFor="belegtext">Belegtext</Label>
          <Input id="belegtext" />
        </div>
      </div>
      <Button className="mt-4">Submit</Button>
    </div>
  );
};

export default Layout;