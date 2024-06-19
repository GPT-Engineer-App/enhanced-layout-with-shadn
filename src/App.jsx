import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "./components/ui/card.jsx";
import { Button } from "./components/ui/button.jsx";
import { Label } from "./components/ui/label.jsx";
import { Separator } from "./components/ui/separator.jsx";
import "./App.css";
import Navbar from "./components/Navbar.jsx";

function App() {
  const handleClose = () => {
    // Logic to handle close action, e.g., navigate to another page or hide the details
    console.log("Close button clicked");
  };
  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      <div className="close-button-container">
        <Button variant="ghost" onClick={handleClose}>Close</Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid">
            <div>
              <Label className="label">Eingegangen_am:</Label>
              <p className="value">2024-06-11T05:42:51+00:00</p>
              <Separator className="my-2" />
              <Label className="label">Konto:</Label>
              <p className="value">Leer</p>
              <Separator className="my-2" />
              <Label className="label">Ev/Vp:</Label>
              <p className="value">Leer</p>
              <Separator className="my-2" />
              <Label className="label">Belegtext:</Label>
              <p className="value">Leer</p>
              <Separator className="my-2" />
              <Label className="label">Kommentar:</Label>
              <p className="value">Leer</p>
              <Separator className="my-2" />
              <Label className="label">Fällig_am:</Label>
              <p className="value">Leer</p>
              <Separator className="my-2" />
              <Label className="label">Gebucht:</Label>
              <p className="value">Leer</p>
              <Separator className="my-2" />
              <Label className="label">Skonto:</Label>
              <p className="value">No</p>
            </div>
            <div>
              <Label className="label">Kostenstelle:</Label>
              <p className="value">Leer</p>
              <Separator className="my-2" />
              <Label className="label">VB:</Label>
              <p className="value">Leer</p>
              <Separator className="my-2" />
              <Label className="label">wer_geprüft:</Label>
              <p className="value">Leer</p>
              <Separator className="my-2" />
              <Label className="label">wer_bezahlt:</Label>
              <p className="value">Leer</p>
              <Separator className="my-2" />
              <Label className="label">Status:</Label>
              <p className="value">Empfangen</p>
              <Separator className="my-2" />
              <Label className="label">Amount:</Label>
              <p className="value">Leer</p>
              <Separator className="my-2" />
              <Label className="label">Sender:</Label>
              <p className="value">Finance, finance@wph.onl</p>
            </div>
          </div>
          <Separator className="my-4" />
          <Label className="label">Email_body:</Label>
          <p className="value full-width">
            Sehr geehrte Damen und Herren, unsere Leistung wurde wie vereinbart erbracht. Wahrscheinlich ist es Ihrer Aufmerksamkeit entgangen, dass die dazugehörige Rechnung [R2002880] zur Zahlung fällig ist. Zahlungseingänge bis 10.06.2024 sind berücksichtigt. Wir bitten daher um schnellstmögliche Überweisung des fälligen Betrages. Falls dies bereits geschehen ist, betrachten Sie dieses Schreiben bitte als gegenstandlos. Fragen beantworten wir Ihnen gerne per Mail unter <a href="mailto:finance@wph.onl">finance@wph.onl</a>. Rechnungsnummer: 2002880 Rechnungsdatum: 02.04.2024 Fälligkeitsdatum: 02.04.2024 Inhalt: Abrechnung Managed Service Leistungen 01.04.24-30.06.24 Rechnungsbetrag: € 1.713,60 OFFEN: € 1.713,60
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;