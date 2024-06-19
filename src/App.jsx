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

function App() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Details</CardTitle>
        </CardHeader>
        <CardContent>
          <Button variant="destructive" className="mb-4">Close</Button>
          <div className="grid">
            <div>
              <Label>Eingegangen_am:</Label>
              <p>2024-06-11T05:42:51+00:00</p>
              <Separator className="my-2" />
              <Label>Konto:</Label>
              <p>Leer</p>
              <Separator className="my-2" />
              <Label>Ev/Vp:</Label>
              <p>Leer</p>
              <Separator className="my-2" />
              <Label>Belegtext:</Label>
              <p>Leer</p>
              <Separator className="my-2" />
              <Label>Kommentar:</Label>
              <p>Leer</p>
              <Separator className="my-2" />
              <Label>Fällig_am:</Label>
              <p>Leer</p>
              <Separator className="my-2" />
              <Label>Gebucht:</Label>
              <p>Leer</p>
              <Separator className="my-2" />
              <Label>Skonto:</Label>
              <p>No</p>
            </div>
            <div>
              <Label>Kostenstelle:</Label>
              <p>Leer</p>
              <Separator className="my-2" />
              <Label>VB:</Label>
              <p>Leer</p>
              <Separator className="my-2" />
              <Label>wer_geprüft:</Label>
              <p>Leer</p>
              <Separator className="my-2" />
              <Label>wer_bezahlt:</Label>
              <p>Leer</p>
              <Separator className="my-2" />
              <Label>Status:</Label>
              <p>Empfangen</p>
              <Separator className="my-2" />
              <Label>Amount:</Label>
              <p>Leer</p>
              <Separator className="my-2" />
              <Label>Sender:</Label>
              <p>Finance, finance@wph.onl</p>
              <Separator className="my-2" />
              <Label>Email_body:</Label>
              <p>
                Sehr geehrte Damen und Herren, unsere Leistung wurde wie vereinbart erbracht. Wahrscheinlich ist es Ihrer Aufmerksamkeit entgangen, dass die dazugehörige Rechnung [R2002880] zur Zahlung fällig ist. Zahlungseingänge bis 10.06.2024 sind berücksichtigt. Wir bitten daher um schnellstmögliche Überweisung des fälligen Betrages. Falls dies bereits geschehen ist, betrachten Sie dieses Schreiben bitte als gegenstandlos. Fragen beantworten wir Ihnen gerne per Mail unter <a href="mailto:finance@wph.onl">finance@wph.onl</a>. Rechnungsnummer: 2002880 Rechnungsdatum: 02.04.2024 Fälligkeitsdatum: 02.04.2024 Inhalt: Abrechnung Managed Service Leistungen 01.04.24-30.06.24 Rechnungsbetrag: € 1.713,60 OFFEN: € 1.713,60
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export default App;