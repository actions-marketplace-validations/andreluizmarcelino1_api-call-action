# webhook-action

GitHub Action that sends a request of any kind. This is a thin wrapper around Axios.

## Inputs

### `url`

**Required**: URL to send post request to.

### `type`

**Required**: Type to send request to (POST/PATCH).

### `data`

Optional: JSON string of data to pass into request. Default `"{}"`.

### `headers`

Optional: JSON string of headers to pass into request. Default `"{}"`.

### `params`

Optional: JSON string of query parameters to pass into request. Default `"{}"`.


## Example usage

```yaml
uses: andreluizmarcelino1/api-call-action@v1
with:
  url: ${{ secrets.API_URL }}
  data: "{\"command\": \"publish\"}"
  headers: "{\"Authorization\": \"Bearer ${{ secrets.API_KEY }}\"}"
  params: "{\"content\": \"Test Content\"}"
```


## Contributing

Feel free to open issues or submit PRs.
#   a p i - c a l l - a c t i o n  
 