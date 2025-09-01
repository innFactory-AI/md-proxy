# MD Proxy für Firecrawl <> Crawl4ai

## Deploy

```bash
helm upgrade --install md-proxy ./k8s/charts --namespace mcp --values ./k8s/charts/values.yaml --kube-context aks-innfactoryai-prod
```