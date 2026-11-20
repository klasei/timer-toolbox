<script lang="ts">
  import { language, languageOptions, t } from "#lib/i18n/index.svelte.ts";

  let { class: className = "" }: { class?: string } = $props();
</script>

<div
  class="flex h-8 items-center rounded-full bg-white px-1 ring-1 ring-slate-200 dark:bg-slate-800 dark:ring-slate-600 {className}"
>
  <svg
    class="h-4 w-4 shrink-0 text-slate-500 dark:text-slate-300"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
  <select
    class="ml-1 h-6 cursor-pointer appearance-none rounded-full bg-transparent pr-4 text-sm font-medium text-slate-600 focus:outline-none dark:text-slate-200"
    aria-label={t("language.change")}
    bind:value={language.code}
  >
    {#each languageOptions as option (option.code)}
      <option value={option.code}>{option.name}</option>
    {/each}
  </select>
</div>
