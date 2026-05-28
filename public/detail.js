(function () {
  const parts = window.location.pathname.split('/').filter(Boolean);
  // Path is /requests/<externalId>
  const externalId = decodeURIComponent(parts[parts.length - 1] || '');

  const crumbCurrent = document.getElementById('crumbCurrent');
  const recordTitle = document.getElementById('recordTitle');
  const hlStatus = document.getElementById('hlStatus');
  const hlChannel = document.getElementById('hlChannel');
  const hlSkill = document.getElementById('hlSkill');
  const hlDriver = document.getElementById('hlDriver');

  const fldExternalId = document.getElementById('fldExternalId');
  const fldTimestamp = document.getElementById('fldTimestamp');
  const fldChannel = document.getElementById('fldChannel');
  const fldSkill = document.getElementById('fldSkill');
  const fldDriver = document.getElementById('fldDriver');
  const fldClosingPill = document.getElementById('fldClosingPill');
  const fldDescription = document.getElementById('fldDescription');

  const errorEl = document.getElementById('recordError');

  function fmtDateTime(iso) {
    if (!iso) return '\u2014';
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return iso;
    // Salesforce-style: "5/27/2026, 12:25 PM" (browser locale-aware)
    return d.toLocaleString(undefined, {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  }

  function statusModifierClass(closingReason) {
    switch (closingReason) {
      case 'Solved':
        return 'status-pill-solved';
      case 'On Hold':
        return 'status-pill-hold';
      case 'On Pause':
        return 'status-pill-pause';
      case 'Transferred':
        return 'status-pill-transferred';
      default:
        return 'status-pill-default';
    }
  }

  function applyPill(el, value) {
    el.textContent = value || '\u2014';
    el.className = 'status-pill ' + statusModifierClass(value);
  }

  function setText(el, value) {
    el.textContent = value == null || value === '' ? '\u2014' : value;
  }

  async function load() {
    if (!externalId) {
      errorEl.textContent = 'No request ID in URL.';
      errorEl.hidden = false;
      return;
    }

    document.title = `${externalId} | ACME CRM`;
    crumbCurrent.textContent = externalId;
    recordTitle.textContent = externalId;
    fldExternalId.textContent = externalId;

    try {
      const res = await fetch(
        `/api/requests/${encodeURIComponent(externalId)}`
      );
      if (res.status === 404) {
        throw new Error(`Request ${externalId} not found`);
      }
      if (!res.ok) {
        const text = await res.text().catch(() => '');
        throw new Error(`HTTP ${res.status} ${text}`);
      }
      const data = await res.json();
      const r = data && data.request;
      if (!r) throw new Error('Empty response');

      // Highlights panel
      applyPill(hlStatus, r.closingReason);
      setText(hlChannel, r.callChannel);
      setText(hlSkill, r.skill);
      setText(hlDriver, r.contactDriver);

      // Details card
      setText(fldChannel, r.callChannel);
      setText(fldSkill, r.skill);
      setText(fldDriver, r.contactDriver);
      applyPill(fldClosingPill, r.closingReason);
      fldTimestamp.textContent = fmtDateTime(r.timestamp);
      fldTimestamp.title = r.timestamp || '';
      setText(fldDescription, r.description);

      errorEl.hidden = true;
    } catch (err) {
      console.error('Detail load failed', err);
      errorEl.textContent = `Could not load request: ${err.message}`;
      errorEl.hidden = false;
    }
  }

  load();
})();
