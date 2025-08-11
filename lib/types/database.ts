export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          username: string | null
          full_name: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          username?: string | null
          full_name?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          username?: string | null
          full_name?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      recipes: {
        Row: {
          id: string
          created_at: string
          user_id: string
          title: string
          ingredients: string
          instructions: string
          cooking_time: number | null
          difficulty: string | null
          category: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          user_id: string
          title: string
          ingredients: string
          instructions: string
          cooking_time?: number | null
          difficulty?: string | null
          category?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          user_id?: string
          title?: string
          ingredients?: string
          instructions?: string
          cooking_time?: number | null
          difficulty?: string | null
          category?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
