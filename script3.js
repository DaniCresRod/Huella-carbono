const API_KEY = "HPXF6NY460M1EGHNQYPH3YSDDJ0N";
let content=fetch("https://beta4.api.climatiq.io/estimate", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      emission_factor: {
        activity_id: "electricity-supply_grid-source_residual_mix",
        data_version: "^1",
      },
      parameters: {
        energy: 4200,
        energy_unit: "kWh",
      },
    }),
  })