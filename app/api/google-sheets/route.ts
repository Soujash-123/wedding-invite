const SPREADSHEET_ID = "1RRSqUDCra1HqJlYzlyscKCO7-1fh6b1z6Yf9LXbT01A"

const SHEETS = {
  sheet_1: 0,
  sheet_2: 909773221,
}

function parseCSV(csvText: string) {
  return csvText
    .trim()
    .split("\n")
    .map((row) => row.split(","))
}

export async function GET() {
  try {
    const result: Record<string, any[]> = {}

    for (const [name, gid] of Object.entries(SHEETS)) {
      const url = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?format=csv&gid=${gid}`
      const res = await fetch(url)

      if (!res.ok) {
        throw new Error(`Failed to fetch ${name}`)
      }

      const csvText = await res.text()
      result[name] = parseCSV(csvText)
    }

    return Response.json(result)
  } catch (error) {
    console.error("Error fetching Google Sheets:", error)
    return Response.json({ error: "Failed to fetch sheet data" }, { status: 500 })
  }
}
