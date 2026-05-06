# Troubleshooting

Common issues and solutions for DClaw Data.

## Quick Diagnostics

```bash
# Check app pods
kubectl get pods -n dclaw-data

# Check logs
kubectl logs -n dclaw-data deployment/dclaw-data-backend

# Check database
kubectl get clusters -n dclaw-data
```

## Sections

- [Common Issues](./common-issues)
- [FAQ](./faq)
