(function () {
  const tbody = document.getElementById('listBody');
  const errorEl = document.getElementById('listError');
  const itemCountEl = document.getElementById('itemCount');
  const updatedAtEl = document.getElementById('updatedAt');
  const footerEl = document.getElementById('listFooter');

  function escapeHtml(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function fmtTimestamp(iso) {
    if (!iso) return '\u2014';
    const ms = Date.now() - new Date(iso).getTime();
    if (ms < 60000) return 'Just now';
    if (ms < 3600000) {
      const m = Math.max(1, Math.round(ms / 60000));
      return `${m}m ago`;
    }
    if (ms < 86400000) {
      const h = Math.round(ms / 3600000);
      return `${h}h ago`;
    }
    if (ms < 7 * 86400000) {
      const d = Math.round(ms / 86400000);
      return `${d}d ago`;
    }
    return new Date(iso).toLocaleDateString(undefined, {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  }

  function rowActionsSvg() {
    return [
      '<svg viewBox="0 0 16 16" aria-hidden="true">',
      '<path d="M5 8a1 1 0 1 0 0-.001A1 1 0 0 0 5 8zm3 0a1 1 0 1 0 0-.001A1 1 0 0 0 8 8zm3 0a1 1 0 1 0 0-.001A1 1 0 0 0 11 8z" stroke="currentColor" stroke-width="1.4"/>',
      '</svg>'
    ].join('');
  }

  function renderRow(r) {
    const ext = escapeHtml(r.externalId);
    const desc = escapeHtml(r.description);
    const ts = escapeHtml(fmtTimestamp(r.timestamp));
    const isoAttr = escapeHtml(r.timestamp || '');
    return [
      '<tr>',
      '<td class="col-checkbox"><span class="cb" aria-hidden="true"></span></td>',
      `<td class="col-external cell-external"><a href="#" tabindex="-1" onclick="return false">${ext}</a></td>`,
      `<td class="col-description cell-description">${desc}</td>`,
      `<td class="col-timestamp cell-timestamp" title="${isoAttr}">${ts}</td>`,
      '<td class="col-actions">',
      `<button class="row-actions-btn" type="button" aria-label="Row actions">${rowActionsSvg()}</button>`,
      '</td>',
      '</tr>'
    ].join('');
  }

  async function load() {
    try {
      const res = await fetch('/api/requests');
      if (!res.ok) {
        const text = await res.text().catch(() => '');
        throw new Error(`HTTP ${res.status} ${text}`);
      }
      const data = await res.json();
      const requests = (data && data.requests) || [];

      if (!requests.length) {
        tbody.innerHTML =
          '<tr><td colspan="5" style="padding:32px;text-align:center;color:var(--text-tertiary);">No items to display.</td></tr>';
        itemCountEl.textContent = '0 items';
        footerEl.textContent = '0 of 0';
        return;
      }

      tbody.innerHTML = requests.map(renderRow).join('');
      itemCountEl.textContent = `${requests.length} item${requests.length === 1 ? '' : 's'}`;
      footerEl.textContent = `1-${requests.length} of ${requests.length}`;
      updatedAtEl.textContent = 'Updated a few seconds ago';
      errorEl.hidden = true;
    } catch (err) {
      console.error('Failed to load requests', err);
      tbody.innerHTML = '';
      errorEl.textContent = `Could not load requests: ${err.message}`;
      errorEl.hidden = false;
      itemCountEl.textContent = '';
      footerEl.textContent = '';
    }
  }

  load();
})();
