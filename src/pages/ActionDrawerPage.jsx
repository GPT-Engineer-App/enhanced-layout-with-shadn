import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card.jsx";
import { Button } from "../components/ui/button.jsx";
import { Label } from "../components/ui/label.jsx";
import { Input } from "../components/ui/input.jsx";
import { Textarea } from "../components/ui/textarea.jsx";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectGroup, SelectLabel, SelectValue } from "../components/ui/select.jsx";
import { Slider } from "../components/ui/slider.jsx";
import { Separator } from "../components/ui/separator.jsx";
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar.jsx"; // Import Navbar

const ActionDrawerPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ width: "100%", margin: "0 auto", position: "relative" }} className="full-width"> {/* Set width to 100% */}
      <Navbar /> {/* Add Navbar */}
      <Card>
        <CardHeader>
          <CardTitle>Kontierungstempel</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Please fill out the fields..</p>
          <div className="grid grid-cols-2 gap-4 full-width">
            <div>
              <Label>eingegangen_am</Label>
              <Input type="date" className="full-width" />
              <Separator className="my-2" />
              <Label>fällig_am</Label>
              <Input type="date" className="full-width" />
              <Separator className="my-2" />
              <Label>gebucht</Label>
              <Input type="date" className="full-width" />
              <Separator className="my-2" />
              <Label>Konto</Label>
              <Input type="text" className="full-width" />
              <Separator className="my-2" />
              <Label>EV/VP</Label>
              <Input type="text" className="full-width" />
              <Separator className="my-2" />
              <Label>Belegtext</Label>
              <Input type="text" className="full-width" />
            </div>
            <div>
              <Label>Komentar</Label>
              <Textarea className="full-width" />
              <Separator className="my-2" />
              <Label>Skonto</Label>
              <Slider defaultValue={[0]} max={100} step={1} className="full-width" />
              <Separator className="my-2" />
              <Label>Kostenstelle</Label>
              <Select className="full-width">
                <SelectTrigger>
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Options</SelectLabel>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Separator className="my-2" />
              <Label>VB</Label>
              <Select className="full-width">
                <SelectTrigger>
                  <SelectValue placeholder="Select..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Options</SelectLabel>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Separator className="my-2" />
              <Label>Ticket Number</Label>
              <Input type="text" className="full-width" />
            </div>
          </div>
          <Button variant="default" className="mt-4 full-width">Submit</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ActionDrawerPage;