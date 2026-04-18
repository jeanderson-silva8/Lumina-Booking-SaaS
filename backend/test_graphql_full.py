from urllib.request import Request, urlopen
import json
req = Request('http://localhost:8000/graphql', data=json.dumps({
  'query': 'query GetDashboardMetrics($startDate: String!, $endDate: String!) { dashboardMetrics(startDate: $startDate, endDate: $endDate) { summary { mrr churnRate voluntaryChurn involuntaryChurn ltv } timeline { date mrrValue } } }', 
  'variables': {'startDate': '2025-04-15T00:00:00Z', 'endDate': '2026-04-15T00:00:00Z'}
}).encode('utf-8'), headers={'Content-Type': 'application/json'})
res = urlopen(req).read().decode('utf-8')
print(json.dumps(json.loads(res), indent=2))
