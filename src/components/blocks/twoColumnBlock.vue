<template>
  <div class="container-fluid bg-{{block.backgroundColour}}">
    <div class="container py-5">
      {% for row in self.row.all() %}
      <div class="row">
        <div
          class="{% if self.width == 'natural' %}offset-md-1{% endif %} {{width}} d-flex justify-content-center flex-column mb-2">
          {% for content in row.column1.all() %}
          {% if content.textContent|length %}
          <div v-html="content.textContent"></div>
          {% endif %}
          {% if content.file|length %}
          <img class="mx-auto" src="{{ file.url }}" alt="{{ file.title }}">
          {% endif %}
          {% if content.form %}
          {{
            content.form.render({
              class: "form",
              labelClass: "form-label",
              inputClass: "form-control",
              instructionsBelowField: true
            })
          }}
          {% endif %}
          {% endfor %}
        </div>
        <div class="{{width}} d-flex justify-content-center flex-column mb-2">
          {% for content in row.column2.all() %}
          {% if content.textContent|length %}
          {{ content.textContent | raw }}
          {% endif %}
          {% if content.file|length %}
          {{ imageFunc.image(content.file.one()) }}
          {% endif %}
          {% if content.form %}
          {{
            content.form.render({
              class: "form",
              labelClass: "form-label",
              inputClass: "form-control",
              instructionsBelowField: true
            })
          }}
          {% endif %}
          {% endfor %}
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</template>

<script>
export default {
  async created() {
    this.width = block.width == "natural" ? "col-12 col-md-6": "col-12 col-md-5";
  },
}
</script>