<!-- The "?" at the bottom left: a way to reach us from every page. -->
<script lang="ts">
  import Icon from "./Icon.svelte";
  import Modal from "./Modal.svelte";
  import { t } from "#lib/i18n/index.svelte.ts";

  let { class: className = "" }: { class?: string } = $props();

  let open = $state(false);
</script>

<button
  type="button"
  class="inline-flex size-11 items-center justify-center rounded-full bg-white text-slate-500 shadow-sm ring-1 ring-slate-200 transition hover:text-accent-dark active:bg-slate-100 hc:bg-neutral-800 hc:text-neutral-200 hc:ring-neutral-600 {className}"
  aria-label={t("nav.help")}
  aria-haspopup="dialog"
  onclick={() => (open = true)}
>
  <Icon name="help" class="size-6" />
</button>

{#if open}
  <Modal
    title={t("help.title")}
    closeLabel={t("common.close")}
    size="small"
    onclose={() => (open = false)}
  >
    <div class="space-y-4 px-5 py-5 leading-relaxed text-slate-700">
      <p>{t("help.intro")}</p>
      <div>
        <h3 class="font-semibold text-slate-900">{t("help.addSegments")}</h3>
        <p>{t("help.addSegmentsBody")}</p>
      </div>
      <div>
        <h3 class="font-semibold text-slate-900">{t("help.advance")}</h3>
        <p>{t("help.advanceBody")}</p>
      </div>
      <div>
        <h3 class="font-semibold text-slate-900">{t("help.visible")}</h3>
        <p>{t("help.visibleBody")}</p>
      </div>
      <p>
        <a
          class="font-semibold text-accent-dark underline underline-offset-2"
          href="mailto:support@teacher.dev?subject=Laikmaciai"
          >support@teacher.dev</a
        >.
      </p>
    </div>
  </Modal>
{/if}
