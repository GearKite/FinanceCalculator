<script lang="ts">
  import type { CalculatorInputT } from "$lib/types";

  export let inputs: Array<CalculatorInputT>;
  export let calculate: Function;

  function getInputs() {
    const variables: Map<string, any> = new Map();

    inputs.forEach((givenInput) => {
      const element = <HTMLInputElement>document.getElementById(givenInput.ref)!;

      variables.set(element.id, element.value);
    });

    return variables;
  }
</script>

<div id="div-inputs">
  {#each inputs as input}
    <label for={input.ref}>{input.label}</label>

    {#if input.type === "number"}
      <input id={input.ref} type="number" value={input.default} on:input={calculate(getInputs())} />
    {:else if input.type === "boolean"}
      <input
        id={input.ref}
        type="checkbox"
        checked={input.default === true}
        on:input={calculate(getInputs())}
      />
    {/if}

    {#if input.unit}
      <label for={input.ref}>{input.unit}</label>
    {/if}

    <br />
  {/each}
</div>
