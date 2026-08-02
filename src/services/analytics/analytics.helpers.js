export function startOfDay(date) {
  const value = new Date(date);

  value.setHours(0, 0, 0, 0);

  return value;
}

export function lastSevenDays(events) {
  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date();

    date.setDate(date.getDate() - (6 - index));

    const key = date.toISOString().split("T")[0];

    return {
      date: key,

      label: date.toLocaleDateString("en", {
        weekday: "short",
      }),

      views: events.filter(
        (event) =>
          (event.eventType || "view") === "view" &&
          new Date(event.visitedAt)
            .toISOString()
            .split("T")[0] === key,
      ).length,
    };
  });
}

export function breakdown(events, field) {
  const counts = new Map();

  for (const event of events.filter(
    (item) => (item.eventType || "view") === "view",
  )) {
    const value = event[field] || "Unknown";

    counts.set(
      value,
      (counts.get(value) || 0) + 1,
    );
  }

  const total = [...counts.values()].reduce(
    (sum, value) => sum + value,
    0,
  );

  return [...counts.entries()]
    .map(([name, count]) => ({
      name,
      count,
      percent: total
        ? Math.round((count / total) * 100)
        : 0,
    }))
    .sort((a, b) => b.count - a.count);
}

//track
export function incrementBreakdown(
  items,
  key,
  value,
) {
  const existing = items.find(
    (item) => item[key] === value,
  );

  if (existing) {
    existing.views += 1;
  } else {
    items.push({
      [key]: value,
      views: 1,
    });
  }
}