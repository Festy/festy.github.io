<template>
  <div id="projects">
    <v-app>
    <v-timeline dense>
          <v-timeline-item
            small
            v-for="(project, index) in projects"
            :color="project.color"
            :key="index"
          >
            <v-card>
              <v-card-title>{{project.title}}</v-card-title>
              <v-card-subtitle>{{project.subTitle}}</v-card-subtitle>
              <v-card-text>{{project.discription}}</v-card-text>
            </v-card>
          </v-timeline-item>
    </v-timeline>
    </v-app>
  </div>
</template>

<script lang="ts">

export default {
  data () {
    return {
      projects: [
        {
          title: 'Kubernetes Cluster Migration',
          subTitle: 'Migrated k8 clusters',
          discription: 'Some discription about the project that would be explained here',
          date: 'Oct 10 2016',
          color: 'green'
        },
        {
          title: 'Angular to Vue Migration',
          subTitle: 'Migrated existing componts from angular to vue',
          discription: 'Some discription about the project that would be explained here',
          date: 'Jan 10 2018',
          color: 'cyan'

        },
        {
          title: 'Intern Mentoring',
          subTitle: 'Mentored junior engineer and intern',
          discription: 'Some discription about the project that would be explained here',
          date: 'Jan 20 2020',
          color: 'amber'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "../vars.scss";

#projects {
  display: flex;
  justify-content: center;
}

</style>
