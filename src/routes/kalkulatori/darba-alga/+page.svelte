<script lang="ts">
  import type { CalculatorInputT } from "$lib/types";
  import Calculator from "$lib/calculator.svelte";

  let results = "";
  let apgadajamoAtvieglojums = 0;

  function calculate(v: Map<string, any>) {
    const bruto = v.get("bruto");
    const apgadajamie = v.get("apgadajamie");
    const gramatina = v.get("gramatina");
    const atvieglojumi = v.get("atvieglojumi");
    const minimums = v.get("minimums");

    results = bruto; // TODO: Add formula
  }

  const calculatorInputs: Array<CalculatorInputT> = [
    {
      ref: "bruto",
      label: "Bruto alga (pirms nodokļiem)",
      type: "number",
      default: 1000,
      unit: "EUR, mēnesī"
    },
    {
      ref: "apgadajamie",
      label: "Apgādājamo skaits",
      type: "number",
      default: 0
    },
    {
      ref: "gramatina",
      label: "Nodokļu grāmatiņa iesniegta darba devējam?",
      type: "boolean",
      default: true
    },
    {
      ref: "atvieglojumi",
      label: "Papildus nodokļa atvieglojumi",
      type: "number",
      default: 0,
      unit: "EUR, mēnesī"
    },
    {
      ref: "minimums",
      label: "Neapliekamais minimums",
      type: "number",
      default: 1000,
      unit: "EUR, mēnesī"
    }
  ];
</script>

<Calculator inputs={calculatorInputs} {calculate} />

<br />

<div class="results">
  <span>Atvieglojums par apgādībā esošām personām: </span><span>{apgadajamoAtvieglojums}</span>
  <h2>{results}</h2>
</div>
