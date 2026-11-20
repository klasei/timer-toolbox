<!-- The pop-up for making or changing a timer: its name, its segments and what it
     does when a segment ends. Changes apply as they're made. -->
<script lang="ts">
  import { COLORS, colorHex } from "#lib/colors.ts";
  import { formatTime } from "#lib/run.ts";
  import { app, firstEmoji } from "#lib/state.svelte.ts";
  import { t } from "#lib/i18n/index.svelte.ts";
  import {
    MAX_LABEL_LENGTH,
    MAX_MINUTES,
    MAX_NAME_LENGTH,
    MAX_SEGMENTS,
    MIN_MINUTES,
  } from "#lib/types.ts";
  import Icon from "./Icon.svelte";
  import Modal from "./Modal.svelte";
  import TimerBehaviour from "./TimerBehaviour.svelte";

  let {
    timerId,
    isNew = false,
    onclose,
    oncancel,
  }: {
    timerId: string;
    /**
     * A timer just made from "New timer": Cancel throws it away. Escape or a
     * click outside keeps it, so a stray click never loses what was typed.
     */
    isNew?: boolean;
    onclose: () => void;
    oncancel?: () => void;
  } = $props();

  const timer = $derived(app.timers.find((t) => t.id === timerId));
  const totalMinutes = $derived(
    timer?.segments.reduce((sum, segment) => sum + segment.minutes, 0) ?? 0,
  );
  const isRunning = $derived(app.run.started && app.run.timerId === timerId);

  // Deleted elsewhere (or undone away): nothing left to edit.
  $effect(() => {
    if (!timer) onclose();
  });

  const row =
    "flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6";
  const input =
    "min-h-11 min-w-0 rounded-xl border-2 border-slate-300 px-3 text-lg font-semibold focus:border-accent focus:outline-none";
  const iconButton =
    "inline-flex size-11 shrink-0 items-center justify-center rounded-full text-slate-600 hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-transparent";
</script>

{#if timer}
  <Modal
    title={isNew ? t("editor.new") : t("timer.editTimerTitle")}
    {onclose}
    size="medium"
  >
    <div class="flex-1 divide-y divide-slate-100 overflow-y-auto px-4 sm:px-6">
      <div class="flex flex-col gap-2 py-4">
        <label for="editor-name" class="font-semibold">{t("editor.name")}</label>
        <input
          id="editor-name"
          type="text"
          class={input}
          value={timer.name}
          maxlength={MAX_NAME_LENGTH}
          autocomplete="off"
          oninput={(e) => app.rename(timerId, e.currentTarget.value)}
        />
      </div>

      <div class="flex flex-col gap-3 py-4">
        <div>
          <h3 id="segments-title" class="font-semibold">{t("editor.segments")}</h3>
          <p class="text-sm text-slate-600">
            {t("editor.summary", {
              n: timer.segments.length,
              max: MAX_SEGMENTS,
              time: formatTime(totalMinutes * 60_000),
            })}
            {#if isRunning}
              {t("editor.running")}
            {/if}
          </p>
        </div>

        <ol class="flex flex-col gap-3" aria-labelledby="segments-title">
          {#each timer.segments as segment, index (segment.id)}
            {@const n = index + 1}
            <li
              class="flex flex-col gap-3 rounded-2xl border-2 border-l-8 border-slate-200 p-3"
              style:border-left-color={colorHex(segment.color)}
            >
              <div class="flex flex-wrap items-center gap-2">
                <input
                  type="text"
                  class="{input} w-14 text-center text-2xl"
                  aria-label={t("editor.emoji", { n })}
                  placeholder="🙂"
                  value={segment.emoji}
                  autocomplete="off"
                  onchange={(e) => {
                    const emoji = firstEmoji(e.currentTarget.value);
                    e.currentTarget.value = emoji;
                    app.updateSegment(timerId, index, { emoji });
                  }}
                />
                <input
                  type="text"
                  class="{input} flex-1 basis-40"
                  aria-label={t("editor.label", { n })}
                  placeholder={t("timer.part", { n })}
                  value={segment.label}
                  maxlength={MAX_LABEL_LENGTH}
                  autocomplete="off"
                  oninput={(e) =>
                    app.updateSegment(timerId, index, {
                      label: e.currentTarget.value,
                    })}
                />
                <div
                  class="flex items-center gap-1"
                  role="group"
                  aria-label={t("editor.length", { n })}
                >
                  <button
                    type="button"
                    class={iconButton}
                    aria-label={t("editor.minLess")}
                    disabled={segment.minutes <= MIN_MINUTES}
                    onclick={() =>
                      app.updateSegment(timerId, index, {
                        minutes: segment.minutes - 1,
                      })}
                  >
                    <span class="text-2xl leading-none font-bold">−</span>
                  </button>
                  <input
                    type="number"
                    inputmode="numeric"
                    class="{input} w-18 text-center tabular-nums"
                    aria-label={t("editor.minutesAria", { n })}
                    min={MIN_MINUTES}
                    max={MAX_MINUTES}
                    value={segment.minutes}
                    onchange={(e) => {
                      const input = e.currentTarget;

                      app.updateSegment(timerId, index, {
                        minutes: Number(input.value),
                      });
                      input.value = String(timer.segments[index].minutes);
                    }}
                  />
                  <button
                    type="button"
                    class={iconButton}
                    aria-label={t("editor.minMore")}
                    disabled={segment.minutes >= MAX_MINUTES}
                    onclick={() =>
                      app.updateSegment(timerId, index, {
                        minutes: segment.minutes + 1,
                      })}
                  >
                    <Icon name="plus" class="size-5" />
                  </button>
                  <span class="pl-1 font-semibold text-slate-600">{t("editor.minute")}</span>
                </div>
              </div>

              <div class="flex flex-wrap items-center justify-between gap-2">
                <div
                  role="radiogroup"
                  aria-label={t("editor.color", { n })}
                  class="flex flex-wrap gap-1.5"
                >
                  {#each COLORS as swatch (swatch.id)}
                    {@const checked = swatch.id === segment.color}
                    <label
                      class="relative inline-flex size-10 cursor-pointer items-center justify-center rounded-full border-2 border-white has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-blue-700 {checked
                        ? 'ring-3 ring-slate-800'
                        : 'ring-1 ring-slate-300'}"
                      style:background-color={swatch.hex}
                      title={swatch.label}
                    >
                      <input
                        type="radio"
                        name="segment-color-{segment.id}"
                        class="sr-only"
                        {checked}
                        onchange={() =>
                          app.updateSegment(timerId, index, {
                            color: swatch.id,
                          })}
                      />
                      <span class="sr-only">{swatch.label}</span>
                      {#if checked}
                        <Icon name="check" class="size-5 text-slate-900" />
                      {/if}
                    </label>
                  {/each}
                </div>
                <div class="flex items-center">
                  <button
                    type="button"
                    class={iconButton}
                    aria-label={t("editor.moveUp", { n })}
                    disabled={index === 0}
                    onclick={() => app.moveSegment(timerId, index, -1)}
                  >
                    <Icon name="up" class="size-6" />
                  </button>
                  <button
                    type="button"
                    class={iconButton}
                    aria-label={t("editor.moveDown", { n })}
                    disabled={index === timer.segments.length - 1}
                    onclick={() => app.moveSegment(timerId, index, 1)}
                  >
                    <Icon name="down" class="size-6" />
                  </button>
                  <button
                    type="button"
                    class={iconButton}
                    aria-label={t("editor.removeSegment", { n })}
                    disabled={timer.segments.length <= 1}
                    onclick={() => app.removeSegment(timerId, index)}
                  >
                    <Icon name="trash" class="size-5" />
                  </button>
                </div>
              </div>
            </li>
          {/each}
        </ol>

        <button
          type="button"
          class="inline-flex min-h-11 items-center gap-2 self-start rounded-full border-2 border-slate-300 px-4 font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40"
          disabled={timer.segments.length >= MAX_SEGMENTS}
          onclick={() => app.addSegment(timerId)}
        >
          <Icon name="plus" class="size-5" />
          {t("editor.add")}
        </button>
      </div>

      <TimerBehaviour
        prefix="editor"
        rowClass={row}
        value={timer.settings}
        onchange={(patch) => app.updateTimerSettings(timerId, patch)}
      />

      {#if isNew}
        <p class="py-4 text-sm text-slate-600">
          💡 {t("editor.idea")}
          <a
            class="font-semibold text-accent-dark underline underline-offset-2"
            href="mailto:support@teacher.dev?subject=Timer%20Toolbox%20idea"
            >{t("editor.ideaCta")}</a
          >.
        </p>
      {/if}
    </div>

    {#snippet footer()}
      <div class="flex items-center gap-2">
        {#if isNew}
          <button
            type="button"
            class="min-h-11 rounded-full px-4 font-semibold text-slate-600 hover:bg-slate-100"
            onclick={oncancel}
          >
            {t("common.cancel")}
          </button>
        {:else if app.timers.length > 1}
          <button
            type="button"
            class="inline-flex min-h-11 items-center gap-2 rounded-full px-4 font-semibold text-red-700 hover:bg-red-50"
            onclick={() => {
              app.remove(timerId);
              onclose();
            }}
          >
            <Icon name="trash" class="size-5" />
            {t("editor.deleteTimer")}
          </button>
        {/if}
        <button
          type="button"
          class="ml-auto min-h-11 rounded-full bg-accent px-6 font-semibold text-white active:bg-accent-dark"
          onclick={onclose}
        >
          {isNew ? t("editor.create") : t("editor.done")}
        </button>
      </div>
    {/snippet}
  </Modal>
{/if}
